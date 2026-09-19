'use client';

import { Lesson } from '@/types';
import { Volume2, BookOpen, Lightbulb } from 'lucide-react';
import VocabularyCard from './VocabularyCard';
import ExerciseCard from './ExerciseCard';

interface LessonDetailProps {
  lesson: Lesson;
  onExerciseComplete: (exerciseId: string, correct: boolean) => void;
}

export default function LessonDetail({
  lesson,
  onExerciseComplete,
}: LessonDetailProps) {
  const levelColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{lesson.title}</h1>
          <span
            className={`px-4 py-2 rounded-full font-semibold ${
              levelColors[lesson.level]
            }`}
          >
            {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
          </span>
        </div>
        <p className="text-xl text-gray-600 mb-4">{lesson.description}</p>

        {/* Grammar Section */}
        {lesson.grammar && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Grammar Note</h3>
                <p className="text-blue-800">{lesson.grammar}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Vocabulary Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Vocabulary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {lesson.vocabulary.map((word) => (
            <VocabularyCard key={word.id} vocabulary={word} />
          ))}
        </div>
      </section>

      {/* Exercises Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice Exercises</h2>

        <div className="space-y-6">
          {lesson.exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onComplete={(correct) =>
                onExerciseComplete(exercise.id, correct)
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
