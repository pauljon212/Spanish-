import Navigation from '@/components/Navigation';
import ProgressDashboard from '@/components/ProgressDashboard';
import { BarChart3, Clock, Zap } from 'lucide-react';

export default function ProgressPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Learning Progress</h1>
          <p className="text-gray-600 text-lg mb-12">
            Track your Spanish learning journey. Stay consistent and build your skills
            every day.
          </p>

          {/* Progress Dashboard */}
          <section className="mb-16">
            <ProgressDashboard />
          </section>

          {/* Tips Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Daily Consistency
                  </h3>
                  <p className="text-gray-600">
                    Practice a little bit every day to build and maintain your
                    learning streak. Consistency beats intensity!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Review Often
                  </h3>
                  <p className="text-gray-600">
                    Revisit lessons you've already completed to reinforce your memory
                    and improve accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Take Your Time
                  </h3>
                  <p className="text-gray-600">
                    Don't rush through lessons. Focus on understanding each concept
                    before moving forward.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
