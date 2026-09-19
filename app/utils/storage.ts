import { UserProgress, ExerciseResult } from '@/types';

const PROGRESS_KEY = 'spanish-learn:progress';
const RESULTS_KEY = 'spanish-learn:results';

export const getProgress = (): UserProgress => {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  const stored = localStorage.getItem(PROGRESS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getDefaultProgress();
    }
  }
  return getDefaultProgress();
};

export const getDefaultProgress = (): UserProgress => ({
  lessonsCompleted: [],
  exercisesCorrect: {},
  totalExercises: {},
  streak: 0,
  lastAccessed: new Date().toISOString(),
});

export const saveProgress = (progress: UserProgress) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }
};

export const recordExerciseResult = (result: ExerciseResult) => {
  if (typeof window === 'undefined') return;

  const results = getExerciseResults();
  results.push(result);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));

  // Update progress
  const progress = getProgress();
  progress.lastAccessed = new Date().toISOString();
  saveProgress(progress);
};

export const getExerciseResults = (): ExerciseResult[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const stored = localStorage.getItem(RESULTS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
};

export const completeLesson = (lessonId: string) => {
  const progress = getProgress();
  if (!progress.lessonsCompleted.includes(lessonId)) {
    progress.lessonsCompleted.push(lessonId);
    progress.streak += 1;
    progress.lastAccessed = new Date().toISOString();
    saveProgress(progress);
  }
};

export const updateExerciseStats = (
  lessonId: string,
  exerciseId: string,
  correct: boolean
) => {
  const progress = getProgress();
  const statsKey = `${lessonId}:${exerciseId}`;

  if (!progress.totalExercises[statsKey]) {
    progress.totalExercises[statsKey] = 0;
    progress.exercisesCorrect[statsKey] = 0;
  }

  progress.totalExercises[statsKey]++;
  if (correct) {
    progress.exercisesCorrect[statsKey]++;
  }

  saveProgress(progress);
};

export const getAccuracy = (lessonId: string, exerciseId: string): number => {
  const progress = getProgress();
  const statsKey = `${lessonId}:${exerciseId}`;
  const total = progress.totalExercises[statsKey] || 0;
  const correct = progress.exercisesCorrect[statsKey] || 0;

  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const getLessonAccuracy = (lessonId: string): number => {
  const progress = getProgress();
  const exerciseKeys = Object.keys(progress.totalExercises).filter((key) =>
    key.startsWith(`${lessonId}:`)
  );

  if (exerciseKeys.length === 0) return 0;

  const totalCorrect = exerciseKeys.reduce(
    (sum, key) => sum + (progress.exercisesCorrect[key] || 0),
    0
  );
  const totalAttempts = exerciseKeys.reduce(
    (sum, key) => sum + (progress.totalExercises[key] || 0),
    0
  );

  if (totalAttempts === 0) return 0;
  return Math.round((totalCorrect / totalAttempts) * 100);
};
