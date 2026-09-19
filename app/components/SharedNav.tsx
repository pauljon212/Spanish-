'use client';

import Link from 'next/link';
import { BookOpen, Home, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SharedNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition">
          <svg className="w-6 h-6" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 3 39 12.5v19L22 41 5 31.5v-19L22 3Z" />
            <path d="m5 12.5 17 10 17-10M22 22.5V41" />
          </svg>
          <span>JP <strong>Global</strong></span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-slate-800 md:bg-transparent p-4 md:p-0 md:gap-6`}>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-300 transition w-full md:w-auto px-3 py-2 rounded-lg md:rounded-none"
            onClick={() => setMenuOpen(false)}
          >
            <Home size={20} />
            3D Printing
          </Link>
          <Link
            href="/pricing"
            className="flex items-center gap-1 hover:text-blue-300 transition w-full md:w-auto px-3 py-2 rounded-lg md:rounded-none"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 hover:text-blue-300 transition w-full md:w-auto px-3 py-2 rounded-lg md:rounded-none"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 hover:text-blue-300 transition w-full md:w-auto px-3 py-2 rounded-lg md:rounded-none"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="border-t md:border-t-0 md:border-l border-slate-700 my-2 md:my-0 py-2 md:py-0 md:pl-6 w-full md:w-auto"></div>
          <Link
            href="/learn"
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition font-semibold w-full md:w-auto justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <BookOpen size={20} />
            Learn Spanish
          </Link>
        </div>
      </div>
    </nav>
  );
}
