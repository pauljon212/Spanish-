'use client';

import Link from 'next/link';
import { BookOpen, Home, BarChart3 } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/learn" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition">
          <BookOpen size={28} />
          Spanish Learn
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/learn"
            className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            href="/learn/lessons"
            className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
          >
            <BookOpen size={20} />
            Lessons
          </Link>
          <Link
            href="/learn/progress"
            className="flex items-center gap-1 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
          >
            <BarChart3 size={20} />
            Progress
          </Link>
        </div>
      </div>
    </nav>
  );
}
