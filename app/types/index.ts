export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Vocabulary {
  id: string;
  spanish: string;
  english: string;
  pronunciation: string;
  imageUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: DifficultyLevel;
  vocabulary: Vocabulary[];
  exercises: Exercise[];
}

export type ExerciseType = 'vocab' | 'matching' | 'translation' | 'listening';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string;
  spanish?: string;
  english?: string;
}

export interface UserProgress {
  lessonsCompleted: string[];
  exercisesCorrect: Record<string, number>;
  totalExercises: Record<string, number>;
  streak: number;
  lastAccessed: string;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
  timestamp: string;
}
