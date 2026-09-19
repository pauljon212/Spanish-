import ProgressDashboard from '@/components/ProgressDashboard';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Award } from 'lucide-react';

export default function LearnHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-0.5 bg-blue-600"></span>
          Interactive Spanish Learning
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Learn Español
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master Spanish through interactive lessons, vocabulary drills, and
          real pronunciation practice. Build your language skills at your own
          pace.
        </p>
        <Link
          href="/learn/lessons"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg"
        >
          Start Learning Now
          <ArrowRight size={24} />
        </Link>
      </section>

      {/* Progress Dashboard */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Progress</h2>
        <ProgressDashboard />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quick Lessons
              </h3>
              <p className="text-gray-600">
                Learn vocabulary and grammar concepts in bite-sized lessons you
                can complete in 5-10 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interactive Exercises
              </h3>
              <p className="text-gray-600">
                Practice vocabulary matching, translations, and listening
                exercises with instant feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Monitor your accuracy, maintain your streak, and celebrate your
                achievements as you advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Speak Spanish?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Start your learning journey today. Completely free.
        </p>
        <Link
          href="/learn/lessons"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg"
        >
          Begin Lessons
          <ArrowRight size={24} />
        </Link>
      </section>
    </main>
  );
}
