import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../types';

interface BadgeShowcaseProps {
  badges: Badge[];
  onBadgeClick?: (badge: Badge) => void;
}

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({ badges, onBadgeClick }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl p-6 border-2 border-yellow-400">
      <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">
        🏆 Your Magical Achievements
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => onBadgeClick?.(badge)}
          >
            <div className={`bg-gradient-to-br ${badge.color} p-4 rounded-lg border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 hover:scale-105`}>
              <div className="text-2xl mb-2 text-center">{badge.icon}</div>
              <div className="text-xs text-white text-center font-semibold">
                {badge.name}
              </div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              {badge.description}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {badges.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          <div className="text-4xl mb-2">🎯</div>
          <p>Complete quizzes and explore the app to earn magical badges!</p>
        </div>
      )}
    </div>
  );
};