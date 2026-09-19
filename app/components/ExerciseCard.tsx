'use client';

import { Exercise } from '@/types';
import { speak } from '@/utils/audio';
import { useState } from 'react';
import { Volume2, CheckCircle, XCircle } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  lessonId: string;
  onComplete: (correct: boolean, userAnswer: string) => void;
}

export default function ExerciseCard({
  exercise,
  lessonId,
  onComplete,
}: ExerciseCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    let answer = '';
    let correct = false;

    if (exercise.type === 'vocab' || exercise.type === 'matching' || exercise.type === 'listening') {
      answer = selectedAnswer;
      correct = answer === exercise.correctAnswer;
    } else if (exercise.type === 'translation') {
      answer = userInput.trim().toLowerCase();
      correct =
        answer === exercise.correctAnswer.toLowerCase() ||
        answer === exercise.correctAnswer.toLowerCase().replace(/\s+/g, '');
    }

    setIsCorrect(correct);
    setSubmitted(true);
    onComplete(correct, answer);
  };

  const handlePlayAudio = () => {
    if (exercise.spanish) {
      speak(exercise.spanish);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-6">{exercise.question}</h3>

      {(exercise.type === 'listening' || exercise.type === 'vocab' || exercise.type === 'matching') && (
        <>
          {exercise.type === 'listening' && (
            <button
              onClick={handlePlayAudio}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 mb-6 transition"
            >
              <Volume2 size={20} />
              Play Audio
            </button>
          )}

          <div className="space-y-3 mb-6">
            {exercise.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!submitted) setSelectedAnswer(option);
                }}
                disabled={submitted}
                className={`w-full p-4 text-left rounded-lg border-2 font-semibold transition ${
                  selectedAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-400'
                } ${submitted ? 'cursor-not-allowed opacity-70' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {exercise.type === 'translation' && (
        <input
          type="text"
          placeholder="Type your answer..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={submitted}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-6 focus:border-blue-500 focus:outline-none"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !submitted) handleSubmit();
          }}
        />
      )}

      {submitted && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            isCorrect
              ? 'bg-green-100 border-l-4 border-green-500'
              : 'bg-red-100 border-l-4 border-red-500'
          }`}
        >
          {isCorrect ? (
            <>
              <CheckCircle className="text-green-600" size={24} />
              <span className="text-green-800 font-semibold">Correct! Great job!</span>
            </>
          ) : (
            <>
              <XCircle className="text-red-600" size={24} />
              <div>
                <span className="text-red-800 font-semibold block">
                  Not quite. The answer is: <strong>{exercise.correctAnswer}</strong>
                </span>
              </div>
            </>
          )}
        </div>
      )}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={
            (exercise.type === 'translation' && !userInput.trim()) ||
            ((exercise.type === 'vocab' ||
              exercise.type === 'matching' ||
              exercise.type === 'listening') &&
              !selectedAnswer)
          }
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
        >
          Check Answer
        </button>
      )}
    </div>
  );
}
