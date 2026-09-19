import Navigation from '@/components/Navigation';
import LessonCard from '@/components/LessonCard';
import { lessons } from '@/data/lessons';
import { DifficultyLevel } from '@/types';

export default function LessonsPage() {
  const groupedLessons = lessons.reduce(
    (acc, lesson) => {
      if (!acc[lesson.level]) {
        acc[lesson.level] = [];
      }
      acc[lesson.level].push(lesson);
      return acc;
    },
    {} as Record<DifficultyLevel, typeof lessons>
  );

  const levelTitles: Record<DifficultyLevel, string> = {
    beginner: 'Beginner Level',
    intermediate: 'Intermediate Level',
    advanced: 'Advanced Level',
  };

  const levelDescriptions: Record<DifficultyLevel, string> = {
    beginner: 'Perfect for starting your Spanish journey',
    intermediate: 'Build on your foundation with more complex grammar',
    advanced: 'Master advanced concepts and nuances',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Spanish Lessons</h1>
        <p className="text-gray-600 text-lg mb-12">
          Choose a lesson level to start learning. Each lesson includes vocabulary
          and interactive exercises.
        </p>

        {Object.entries(levelTitles).map(([level, title]) => (
          <section key={level} className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600">{levelDescriptions[level as DifficultyLevel]}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedLessons[level as DifficultyLevel]?.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
