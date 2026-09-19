'use client';

import { useState, useMemo } from 'react';
import { lessons } from '@/data/lessons';
import Navigation from '@/components/Navigation';
import VocabularyCard from '@/components/VocabularyCard';
import ExerciseCard from '@/components/ExerciseCard';
import {
  completeLesson,
  updateExerciseStats,
  recordExerciseResult,
  getLessonAccuracy,
  getProgress,
} from '@/utils/storage';
import { useParams } from 'next/navigation';
import { ChevronLeft, CheckCircle, BookOpen } from 'lucide-react';
import Link from 'next/link';

type TabType = 'vocabulary' | 'exercises';

export default function LessonDetailPage() {
  const params = useParams();
  const lessonId = params.id as string;

  const lesson = useMemo(
    () => lessons.find((l) => l.id === lessonId),
    [lessonId]
  );

  const [currentTab, setCurrentTab] = useState<TabType>('vocabulary');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set()
  );
  const [exerciseResults, setExerciseResults] = useState<
    Map<string, { correct: boolean; userAnswer: string }>
  >(new Map());

  const progress = useMemo(() => getProgress(), []);
  const lessonCompleted = progress.lessonsCompleted.includes(lessonId);
  const accuracy = useMemo(() => getLessonAccuracy(lessonId), [lessonId]);

  if (!lesson) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Lesson not found</h1>
            <Link
              href="/learn/lessons"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Back to lessons
            </Link>
          </div>
        </main>
      </>
    );
  }

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const allExercisesCompleted = completedExercises.size === lesson.exercises.length;

  const handleExerciseComplete = (correct: boolean, userAnswer: string) => {
    const exerciseId = currentExercise.id;
    setCompletedExercises((prev) => new Set([...prev, exerciseId]));
    setExerciseResults(
      (prev) =>
        new Map([...prev, [exerciseId, { correct, userAnswer }]])
    );

    updateExerciseStats(lessonId, exerciseId, correct);
    recordExerciseResult({
      exerciseId,
      correct,
      userAnswer,
      timestamp: new Date().toISOString(),
    });

    // Auto-move to next exercise if not the last one
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setTimeout(() => {
        setCurrentExerciseIndex((prev) => prev + 1);
      }, 2000);
    } else if (allExercisesCompleted || completedExercises.size === lesson.exercises.length - 1) {
      // Mark lesson as completed when all exercises are done
      completeLesson(lessonId);
    }
  };

  const resetLesson = () => {
    setCurrentTab('vocabulary');
    setCurrentExerciseIndex(0);
    setCompletedExercises(new Set());
    setExerciseResults(new Map());
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <Link
            href="/learn/lessons"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition"
          >
            <ChevronLeft size={20} />
            Back to Lessons
          </Link>

          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {lesson.title}
              </h1>
              <p className="text-gray-600 text-lg">{lesson.description}</p>
            </div>
            {lessonCompleted && (
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                <CheckCircle className="text-green-600" size={24} />
                <span className="font-semibold text-green-800">Completed</span>
              </div>
            )}
          </div>

          {/* Accuracy Display */}
          {accuracy > 0 && (
            <div className="mb-8 bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">Lesson Accuracy</span>
                <span className="text-2xl font-bold text-blue-600">{accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${accuracy}%` }}
                />
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow mb-8 border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setCurrentTab('vocabulary')}
                className={`flex-1 py-4 px-6 font-semibold transition flex items-center justify-center gap-2 ${
                  currentTab === 'vocabulary'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BookOpen size={20} />
                Vocabulary ({lesson.vocabulary.length})
              </button>
              <button
                onClick={() => setCurrentTab('exercises')}
                className={`flex-1 py-4 px-6 font-semibold transition ${
                  currentTab === 'exercises'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Exercises ({completedExercises.size}/{lesson.exercises.length})
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mb-12">
            {currentTab === 'vocabulary' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lesson.vocabulary.map((vocab) => (
                    <VocabularyCard key={vocab.id} vocab={vocab} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setCurrentTab('exercises')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
                  >
                    Ready? Start Exercises →
                  </button>
                </div>
              </div>
            )}

            {currentTab === 'exercises' && (
              <div>
                {!allExercisesCompleted ? (
                  <div>
                    <div className="mb-6 flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Exercise {currentExerciseIndex + 1} of {lesson.exercises.length}
                      </h2>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{
                            width: `${
                              ((currentExerciseIndex + 1) /
                                lesson.exercises.length) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                    <ExerciseCard
                      exercise={currentExercise}
                      lessonId={lessonId}
                      onComplete={handleExerciseComplete}
                    />
                  </div>
                ) : (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-12 text-center">
                    <CheckCircle
                      className="text-green-600 mx-auto mb-4"
                      size={64}
                    />
                    <h2 className="text-3xl font-bold text-green-800 mb-4">
                      Lesson Complete! 🎉
                    </h2>
                    <p className="text-green-700 text-lg mb-2">
                      You completed all exercises in this lesson.
                    </p>
                    {accuracy > 0 && (
                      <p className="text-green-700 text-lg mb-6">
                        <strong>Overall Accuracy: {accuracy}%</strong>
                      </p>
                    )}
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={resetLesson}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                      >
                        Review Again
                      </button>
                      <Link
                        href="/learn/lessons"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
                      >
                        Next Lesson
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
