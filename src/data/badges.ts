import { Badge } from '../types';

export const availableBadges: Badge[] = [
  {
    id: 'founder-flame',
    name: 'Founder Flame',
    description: 'Awarded on subscription to Pro',
    icon: '🪄',
    color: 'from-red-500 to-yellow-500',
    earnedAt: new Date()
  },
  {
    id: 'vision-seeker',
    name: 'Vision Seeker',
    description: 'For users who complete the quiz 3+ times',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    earnedAt: new Date()
  },
  {
    id: 'builders-wand',
    name: 'Builder\'s Wand',
    description: 'For customizing their startup idea',
    icon: '🛠',
    color: 'from-blue-500 to-cyan-500',
    earnedAt: new Date()
  },
  {
    id: 'idea-alchemist',
    name: 'Idea Alchemist',
    description: 'For unlocking 3+ unique startup ideas',
    icon: '💡',
    color: 'from-green-500 to-emerald-500',
    earnedAt: new Date()
  },
  {
    id: 'house-hustlers',
    name: 'House of Hustlers',
    description: 'Based on their dominant founder type',
    icon: '🏰',
    color: 'from-indigo-500 to-purple-500',
    earnedAt: new Date()
  },
  {
    id: 'scroll-keeper',
    name: 'Scroll Keeper',
    description: 'For saving 5+ startup scrolls',
    icon: '🔮',
    color: 'from-blue-600 to-indigo-600',
    earnedAt: new Date()
  },
  {
    id: 'magic-market-maven',
    name: 'Magic Market Maven',
    description: 'For choosing business/e-commerce niche',
    icon: '✨',
    color: 'from-yellow-500 to-orange-500',
    earnedAt: new Date()
  },
  {
    id: 'master-scrollsmith',
    name: 'Master Scrollsmith',
    description: 'For downloading their startup scroll (PDF)',
    icon: '📜',
    color: 'from-amber-600 to-yellow-600',
    earnedAt: new Date()
  },
  {
    id: 'early-owl',
    name: 'Early Owl',
    description: 'For users who sign up in the first week',
    icon: '🕯',
    color: 'from-orange-500 to-red-500',
    earnedAt: new Date()
  },
  {
    id: 'mystic-explorer',
    name: 'Mystic Explorer',
    description: 'For exploring all sections of the app',
    icon: '🌌',
    color: 'from-purple-600 to-blue-600',
    earnedAt: new Date()
  }
];