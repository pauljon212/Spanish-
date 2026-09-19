'use client';

import { Vocabulary } from '@/types';
import { speak } from '@/utils/audio';
import { Volume2 } from 'lucide-react';

interface VocabularyCardProps {
  vocab: Vocabulary;
}

export default function VocabularyCard({ vocab }: VocabularyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-blue-500">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{vocab.spanish}</h3>
      <p className="text-gray-600 mb-3">{vocab.english}</p>
      <p className="text-sm text-gray-500 italic mb-4">{vocab.pronunciation}</p>
      <button
        onClick={() => speak(vocab.spanish)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 mx-auto transition"
      >
        <Volume2 size={18} />
        Pronounce
      </button>
    </div>
  );
}
