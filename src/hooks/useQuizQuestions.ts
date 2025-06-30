import { useState, useEffect, useCallback } from 'react';
import { supabase, QuizQuestion } from '../lib/supabase';
import { Question } from '../types';

export function useQuizQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .limit(30);

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        console.warn('No questions found in database, falling back to local questions...');
        const { questions: localQuestions } = await import('../data/questions');
        setQuestions(localQuestions.slice(0, 30));
        console.log('Successfully loaded local questions:', localQuestions.slice(0, 30).length);
        return;
      }

      // Transform Supabase data to our Question type
      const transformedQuestions: Question[] = data.map((q: QuizQuestion) => ({
        id: q.id.toString(),
        text: q.question,
        options: [q.option_a, q.option_b, q.option_c, q.option_d].filter(Boolean),
        category: 'business' // Default category since it's not in your schema
      }));

      setQuestions(transformedQuestions);
      console.log('Successfully loaded questions:', transformedQuestions.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch questions';
      setError(errorMessage);
      console.error('Error fetching questions:', err);
      
      // Fallback to local questions if database fails
      console.log('Falling back to local questions...');
      const { questions: localQuestions } = await import('../data/questions');
      setQuestions(localQuestions.slice(0, 30));
    } finally {
      setLoading(false);
    }
  };

  // Use useCallback to prevent function recreation on every render
  const getRandomQuestions = useCallback((count: number = 10): Question[] => {
    if (questions.length === 0) return [];
    
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, questions.length));
  }, [questions]);

  return {
    questions,
    loading,
    error,
    getRandomQuestions,
    refetch: fetchQuestions
  };
}