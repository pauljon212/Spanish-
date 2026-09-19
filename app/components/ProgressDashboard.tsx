'use client';

import { getProgress } from '@/utils/storage';
import { useMemo } from 'react';
import { Flame, Target, TrendingUp } from 'lucide-react';

export default function ProgressDashboard() {
  const progress = useMemo(() => getProgress(), []);

  const totalExercises = Object.values(progress.totalExercises).reduce(
    (sum, val) => sum + val,
    0
  );
  const totalCorrect = Object.values(progress.exercisesCorrect).reduce(
    (sum, val) => sum + val,
    0
  );
  const overallAccuracy =
    totalExercises > 0 ? Math.round((totalCorrect / totalExercises) * 100) : 0;

  const lastAccessedDate = progress.lastAccessed
    ? new Date(progress.lastAccessed).toLocaleDateString()
    : 'Never';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Current Streak</h3>
          <Flame size={28} />
        </div>
        <p className="text-3xl font-bold">{progress.streak}</p>
        <p className="text-sm text-orange-100">consecutive days</p>
      </div>

      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Overall Accuracy</h3>
          <Target size={28} />
        </div>
        <p className="text-3xl font-bold">{overallAccuracy}%</p>
        <p className="text-sm text-blue-100">
          {totalCorrect} / {totalExercises} correct
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Lessons Completed</h3>
          <TrendingUp size={28} />
        </div>
        <p className="text-3xl font-bold">{progress.lessonsCompleted.length}</p>
        <p className="text-sm text-green-100">Last accessed: {lastAccessedDate}</p>
      </div>
    </div>
  );
}
