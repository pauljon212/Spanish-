'use client';

import { Lesson } from '@/types';
import Link from 'next/link';
import { getProgress, getLessonAccuracy } from '@/utils/storage';
import { ArrowRight, Trophy, BookOpen } from 'lucide-react';
import { useMemo } from 'react';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const progress = useMemo(() => getProgress(), []);
  const isCompleted = progress.lessonsCompleted.includes(lesson.id);
  const accuracy = useMemo(() => getLessonAccuracy(lesson.id), [lesson.id]);

  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border-t-4 border-blue-500">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
          {isCompleted && (
            <Trophy className="text-yellow-500" size={24} />
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              levelColors[lesson.level]
            }`}
          >
            {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <BookOpen size={16} />
            {lesson.vocabulary.length} words
          </span>
        </div>

        {accuracy > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Accuracy</span>
              <span className="text-sm font-bold text-blue-600">{accuracy}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>
        )}

        <Link
          href={`/lessons/${lesson.id}`}
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {isCompleted ? 'Review' : 'Start'} Lesson
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
