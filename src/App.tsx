import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { RegistrationForm } from './components/RegistrationForm';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { BadgeShowcase } from './components/BadgeShowcase';
import { LanguageSelector } from './components/LanguageSelector';
import { WhisperingScrollModal } from './components/WhisperingScrollModal';
import { MagicCursor } from './components/MagicCursor';
import { BoltBadge } from './components/BoltBadge';
import { useLocalStorage } from './hooks/useLocalStorage';
import { User, QuizAnswer, StartupIdea, Badge } from './types';
import { generateStartupIdea, shouldShowUpgradePopup, generatePersonalizedInsights } from './utils/quizLogic';
import { availableBadges } from './data/badges';

type AppState = 'landing' | 'registration' | 'quiz' | 'result' | 'dashboard';

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [user, setUser] = useLocalStorage<User | null>('launchgrove-user', null);
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('launchgrove-language', 'en');
  const [currentStartupIdea, setCurrentStartupIdea] = useState<StartupIdea | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    if (user) {
      setAppState('dashboard');
    }
  }, [user]);

  const handleStartJourney = () => {
    if (user) {
      setAppState('quiz');
    } else {
      setAppState('registration');
    }
  };

  const handleRegistration = (userData: Omit<User, 'id' | 'isPro' | 'badges' | 'quizAttempts' | 'savedIdeas' | 'createdAt'>) => {
    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}`,
      isPro: false,
      badges: [availableBadges.find(b => b.id === 'early-owl')!],
      quizAttempts: 0,
      savedIdeas: [],
      createdAt: new Date()
    };
    setUser(newUser);
    setAppState('quiz');
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    console.log('Quiz completed with answers:', answers);
    
    if (!user) {
      console.error('No user found when completing quiz');
      return;
    }

    // Generate personalized startup idea based on quiz answers
    const idea = generateStartupIdea(answers);
    console.log('Generated startup idea:', idea);
    
    setCurrentStartupIdea(idea);
    
    const updatedUser = {
      ...user,
      quizAttempts: user.quizAttempts + 1,
      savedIdeas: [...user.savedIdeas, idea]
    };

    // Award badges based on achievements
    const newBadges: Badge[] = [];
    
    // Vision Seeker badge for 3+ quiz attempts
    if (updatedUser.quizAttempts >= 3 && !user.badges.find(b => b.id === 'vision-seeker')) {
      newBadges.push(availableBadges.find(b => b.id === 'vision-seeker')!);
    }
    
    // Idea Alchemist badge for 3+ unique ideas
    if (updatedUser.savedIdeas.length >= 3 && !user.badges.find(b => b.id === 'idea-alchemist')) {
      newBadges.push(availableBadges.find(b => b.id === 'idea-alchemist')!);
    }

    // House of Hustlers badge based on founder type
    if (!user.badges.find(b => b.id === 'house-hustlers')) {
      newBadges.push(availableBadges.find(b => b.id === 'house-hustlers')!);
    }

    // Magic Market Maven for business-focused ideas
    if (idea.niche.toLowerCase().includes('business') || 
        idea.niche.toLowerCase().includes('commerce') ||
        idea.niche.toLowerCase().includes('fintech')) {
      if (!user.badges.find(b => b.id === 'magic-market-maven')) {
        newBadges.push(availableBadges.find(b => b.id === 'magic-market-maven')!);
      }
    }

    updatedUser.badges = [...updatedUser.badges, ...newBadges];
    setUser(updatedUser);
    
    console.log('Navigating to result page with idea:', idea);
    setAppState('result');

    // Show upgrade popup if conditions are met
    if (shouldShowUpgradePopup(updatedUser.quizAttempts, updatedUser.isPro)) {
      setTimeout(() => setShowUpgradeModal(true), 3000);
    }
  };

  const handleTryAgain = () => {
    if (!user) return;
    
    // For non-pro users, show upgrade modal after 2 attempts
    if (!user.isPro && user.quizAttempts >= 2) {
      setShowUpgradeModal(true);
      return;
    }
    
    // Reset to quiz with new questions
    setCurrentStartupIdea(null);
    setAppState('quiz');
  };

  const handleUpgrade = () => {
    if (!user) return;
    
    const upgradedUser = {
      ...user,
      isPro: true,
      badges: [...user.badges, availableBadges.find(b => b.id === 'founder-flame')!]
    };
    setUser(upgradedUser);
    setShowUpgradeModal(false);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleBackToDashboard = () => {
    setAppState('dashboard');
  };

  return (
    <div className="min-h-screen relative">
      <MagicCursor />
      <BoltBadge variant="light" />
      
      {/* Language Selector - Show on all pages except landing */}
      {appState !== 'landing' && (
        <div className="fixed top-4 left-4 z-40">
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onStartJourney={handleStartJourney} />
          </motion.div>
        )}

        {appState === 'registration' && (
          <motion.div
            key="registration"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <RegistrationForm onRegister={handleRegistration} />
          </motion.div>
        )}

        {appState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <QuizPage onQuizComplete={handleQuizComplete} />
          </motion.div>
        )}

        {appState === 'result' && currentStartupIdea && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ResultPage
              startupIdea={currentStartupIdea}
              onTryAgain={handleTryAgain}
              onUpgrade={handleUpgrade}
              isPro={user?.isPro || false}
            />
          </motion.div>
        )}

        {appState === 'dashboard' && user && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4"
          >
            <div className="max-w-6xl mx-auto py-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                  Welcome back, {user.name}! 🧙‍♂️
                </h1>
                <p className="text-white text-lg">
                  {user.isPro ? 'Pro Wizard' : 'Apprentice Entrepreneur'} • {user.quizAttempts} Quests Completed
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <h2 className="text-2xl font-bold text-white mb-4">🚀 Quick Actions</h2>
                  <div className="space-y-4">
                    <button
                      onClick={() => setAppState('quiz')}
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200"
                    >
                      ✨ Take New Quiz (10 Random Questions)
                    </button>
                    {!user.isPro && (
                      <button
                        onClick={() => setShowUpgradeModal(true)}
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
                      >
                        🔐 Upgrade to Pro - ₹299/month
                      </button>
                    )}
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <h2 className="text-2xl font-bold text-white mb-4">📊 Your Stats</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Quizzes Taken:</span>
                      <span className="text-white font-bold">{user.quizAttempts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Ideas Generated:</span>
                      <span className="text-white font-bold">{user.savedIdeas.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Badges Earned:</span>
                      <span className="text-white font-bold">{user.badges.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Account Type:</span>
                      <span className={`font-bold ${user.isPro ? 'text-yellow-400' : 'text-gray-300'}`}>
                        {user.isPro ? 'Pro ⭐' : 'Free'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <BadgeShowcase badges={user.badges} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhisperingScrollModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
}

export default App;