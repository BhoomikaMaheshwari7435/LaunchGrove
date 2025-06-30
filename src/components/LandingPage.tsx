import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award } from 'lucide-react';

interface LandingPageProps {
  onStartJourney: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartJourney }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      {/* Hogwarts Castle Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img 
          src="/images/Catsle.jpg" 
          alt="Hogwarts Castle" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-4">
            LaunchGrove
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2">
            Discover Your Magical Startup Destiny
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Embark on an enchanted journey to uncover the perfect startup idea tailored just for you. 
            Let the magic of entrepreneurship guide your path to success! ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Magical Quiz</h3>
            <p className="text-gray-300">Answer enchanted questions to reveal your entrepreneurial spirit</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Personalized Ideas</h3>
            <p className="text-gray-300">Get startup ideas crafted specifically for your unique profile</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Earn Badges</h3>
            <p className="text-gray-300">Collect magical achievements as you explore your entrepreneurial journey</p>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartJourney}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-yellow-400"
        >
          ⚡ Expelliarmus - Begin Your Journey!
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-gray-400 mt-6 text-sm"
        >
          Join thousands of aspiring entrepreneurs who've discovered their magical startup path
        </motion.p>
      </div>
    </div>
  );
};