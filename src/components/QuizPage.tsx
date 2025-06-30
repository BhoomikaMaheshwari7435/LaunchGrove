import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, QuizAnswer } from '../types';
import { useQuizQuestions } from '../hooks/useQuizQuestions';

interface QuizPageProps {
  onQuizComplete: (answers: QuizAnswer[]) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionsInitialized, setQuestionsInitialized] = useState(false);
  
  const { questions, loading, error, getRandomQuestions } = useQuizQuestions();

  // Initialize questions only once when questions are loaded
  useEffect(() => {
    if (questions.length > 0 && !questionsInitialized) {
      const randomQuestions = getRandomQuestions(10);
      setSelectedQuestions(randomQuestions);
      setQuestionsInitialized(true);
      console.log('Quiz initialized with questions:', randomQuestions.length);
    }
  }, [questions, questionsInitialized, getRandomQuestions]);

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const progress = selectedQuestions.length > 0 ? ((currentQuestionIndex + 1) / selectedQuestions.length) * 100 : 0;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null || !currentQuestion) return;

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOption
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      onQuizComplete(updatedAnswers);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🎩</div>
          <div className="text-white text-xl">The Sorting Hat is preparing your magical quiz... ✨</div>
          <div className="text-gray-300 text-sm mt-2">Loading questions from the magical database...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-white text-xl mb-4">Oops! The magical quiz couldn't load.</div>
          <div className="text-red-300 mb-4 text-sm">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg"
          >
            Try Again ✨
          </button>
        </div>
      </div>
    );
  }

  if (selectedQuestions.length === 0 || !questionsInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Preparing your magical quiz... ✨</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Sorting Hat Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img 
          src="/images/Hat 2.jpg" 
          alt="Sorting Hat" 
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Progress Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Question {currentQuestionIndex + 1} of {selectedQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-xl p-8 max-w-2xl w-full shadow-2xl border-4 border-yellow-600"
          >
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎩</div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                The Sorting Hat Asks...
              </h2>
              <p className="text-xl text-amber-700 leading-relaxed">
                {currentQuestion.text}
              </p>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={`option-${index}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-purple-400'
                      : 'bg-white text-amber-800 border-yellow-400 hover:border-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === index
                        ? 'border-white bg-white'
                        : 'border-amber-600'
                    }`}>
                      {selectedOption === index && (
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex < selectedQuestions.length - 1 ? 'Next Question ➡️' : 'Reveal My Destiny! ✨'}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};