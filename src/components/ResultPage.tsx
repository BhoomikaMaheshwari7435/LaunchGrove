import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCw, Star, Lightbulb, Target, Users, TrendingUp, Globe, DollarSign } from 'lucide-react';
import { StartupIdea } from '../types';
import { WhisperingScrollModal } from './WhisperingScrollModal';

interface ResultPageProps {
  startupIdea: StartupIdea;
  onTryAgain: () => void;
  onUpgrade: () => void;
  isPro: boolean;
}

const houseColors = {
  gryffindor: 'from-red-600 to-yellow-600',
  hufflepuff: 'from-yellow-600 to-black',
  ravenclaw: 'from-blue-600 to-bronze-600',
  slytherin: 'from-green-600 to-silver-600'
};

const houseImages = {
  gryffindor: '🦁',
  hufflepuff: '🦡',
  ravenclaw: '🦅',
  slytherin: '🐍'
};

const houseDescriptions = {
  gryffindor: 'Bold, brave, and daring entrepreneurs who take risks and lead with courage',
  hufflepuff: 'Patient, loyal, and hardworking founders who build sustainable, community-focused businesses',
  ravenclaw: 'Wise, creative, and analytical entrepreneurs who solve complex problems with innovation',
  slytherin: 'Ambitious, cunning, and resourceful founders who are determined to achieve greatness'
};

const marketData = {
  'EdTech & Personalized Learning': {
    size: '₹4,500 Cr by 2025',
    growth: '25% annually',
    customers: 'Students, Parents, Educational Institutions',
    trends: ['AI-powered learning', 'Vernacular content', 'Skill-based education']
  },
  'Urban Farming & Sustainability': {
    size: '₹2,800 Cr by 2026',
    growth: '30% annually', 
    customers: 'Urban families, Restaurants, Health-conscious consumers',
    trends: ['Organic food demand', 'Space optimization', 'Climate-smart agriculture']
  },
  'HealthTech & Preventive Care': {
    size: '₹8,500 Cr by 2025',
    growth: '35% annually',
    customers: 'Health-conscious individuals, Elderly, Chronic patients',
    trends: ['Telemedicine', 'Wearable devices', 'Preventive healthcare']
  },
  'Professional Skill Development': {
    size: '₹3,200 Cr by 2025',
    growth: '22% annually',
    customers: 'Working professionals, Students, Career changers',
    trends: ['Upskilling demand', 'Remote learning', 'Industry certifications']
  },
  'Community & Social Connection': {
    size: '₹1,800 Cr by 2026',
    growth: '28% annually',
    customers: 'Urban residents, Community groups, Local businesses',
    trends: ['Hyperlocal services', 'Social commerce', 'Community engagement']
  },
  'FinTech & Personal Finance': {
    size: '₹12,000 Cr by 2025',
    growth: '40% annually',
    customers: 'Young professionals, Small businesses, Rural population',
    trends: ['Digital payments', 'Investment apps', 'Credit solutions']
  },
  'E-commerce & Artisan Marketplace': {
    size: '₹15,000 Cr by 2025',
    growth: '18% annually',
    customers: 'Global buyers, Cultural enthusiasts, Gift shoppers',
    trends: ['Authentic crafts', 'Direct-to-consumer', 'Cultural preservation']
  },
  'Food Tech & Waste Reduction': {
    size: '₹2,100 Cr by 2026',
    growth: '32% annually',
    customers: 'Restaurants, NGOs, Environmentally conscious consumers',
    trends: ['Food waste reduction', 'Sustainability focus', 'Social impact']
  },
  'Language Tech & Communication': {
    size: '₹1,500 Cr by 2025',
    growth: '26% annually',
    customers: 'Travelers, Businesses, Educational institutions',
    trends: ['AI translation', 'Voice technology', 'Regional languages']
  },
  'AgriTech & Direct-to-Consumer': {
    size: '₹5,500 Cr by 2025',
    growth: '24% annually',
    customers: 'Urban consumers, Health-conscious families, Restaurants',
    trends: ['Farm-to-table', 'Organic produce', 'Supply chain transparency']
  },
  'Mental Health & Wellness': {
    size: '₹2,400 Cr by 2026',
    growth: '29% annually',
    customers: 'Stressed professionals, Students, Mental health seekers',
    trends: ['Mental health awareness', 'Digital therapy', 'Workplace wellness']
  },
  'EdTech & Programming Education': {
    size: '₹3,800 Cr by 2025',
    growth: '27% annually',
    customers: 'Students, IT professionals, Career switchers',
    trends: ['Coding bootcamps', 'Industry-relevant skills', 'Remote learning']
  }
};

export const ResultPage: React.FC<ResultPageProps> = ({
  startupIdea,
  onTryAgain,
  onUpgrade,
  isPro
}) => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'market' | 'guide'>('overview');

  const handleDownload = () => {
    if (!isPro) {
      setShowUpgradeModal(true);
      return;
    }
    console.log('Downloading startup scroll...');
  };

  const handleCustomize = () => {
    if (!isPro) {
      setShowUpgradeModal(true);
      return;
    }
    console.log('Opening customization...');
  };

  const market = marketData[startupIdea.niche as keyof typeof marketData] || {
    size: '₹2,000 Cr by 2025',
    growth: '25% annually',
    customers: 'Target audience based on your niche',
    trends: ['Digital transformation', 'User experience focus', 'Sustainable solutions']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Magical Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img 
          src="/images/houses 3.jpg" 
          alt="Hogwarts Houses" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full"
        >
          {/* House Sorting Result */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`bg-gradient-to-r ${houseColors[startupIdea.house]} rounded-t-xl p-8 text-center border-4 border-yellow-400 shadow-2xl`}
          >
            <div className="text-8xl mb-4 animate-bounce">{houseImages[startupIdea.house]}</div>
            <h1 className="text-4xl font-bold text-white mb-3">
              🎉 The Sorting Hat Has Spoken! 🎉
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to House {startupIdea.house.charAt(0).toUpperCase() + startupIdea.house.slice(1)}!
            </h2>
            <p className="text-xl text-white opacity-90 mb-2">
              Your Founder Type: <span className="font-bold">{startupIdea.founderType}</span>
            </p>
            <p className="text-lg text-white opacity-80 max-w-2xl mx-auto">
              {houseDescriptions[startupIdea.house]}
            </p>
          </motion.div>

          {/* Startup Idea Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-b-xl border-4 border-t-0 border-yellow-400 shadow-2xl overflow-hidden"
          >
            {/* Startup Header */}
            <div className="text-center p-8 bg-gradient-to-r from-purple-100 to-blue-100">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="text-6xl mb-4"
              >
                ✨
              </motion.div>
              <h2 className="text-4xl font-bold text-amber-800 mb-3">
                {startupIdea.name}
              </h2>
              <p className="text-2xl text-amber-700 italic mb-4">
                "{startupIdea.tagline}"
              </p>
              <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                {startupIdea.niche}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center bg-amber-50 border-b-2 border-yellow-400">
              {[
                { id: 'overview', label: 'Overview', icon: '📋' },
                { id: 'market', label: 'Market & Customers', icon: '📈' },
                { id: 'guide', label: '3-Step Guide', icon: '🗺️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-4 font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-yellow-400 text-amber-800 border-b-4 border-amber-800'
                      : 'text-amber-700 hover:bg-yellow-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-yellow-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
                        <h3 className="text-2xl font-bold text-amber-800">The Magical Idea</h3>
                      </div>
                      <p className="text-amber-700 leading-relaxed text-lg">
                        {startupIdea.description}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border-2 border-yellow-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <Star className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-amber-800">Why It Matters</h3>
                      </div>
                      <p className="text-amber-700 leading-relaxed text-lg">
                        {startupIdea.whyItMatters}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-yellow-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-2xl font-bold text-amber-800">Perfect for You</h3>
                      </div>
                      <p className="text-amber-700 leading-relaxed text-lg">
                        {startupIdea.whySuitableForUser}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 border-2 border-purple-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">{houseImages[startupIdea.house]}</div>
                        <h3 className="text-2xl font-bold text-purple-800">Your House Traits</h3>
                      </div>
                      <p className="text-purple-700 leading-relaxed text-lg">
                        As a {startupIdea.house.charAt(0).toUpperCase() + startupIdea.house.slice(1)} entrepreneur, you bring unique strengths to this venture. {houseDescriptions[startupIdea.house]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'market' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-green-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-2xl font-bold text-green-800">Market Size & Growth</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Market Size:</span>
                          <span className="text-green-700 font-bold text-lg">{market.size}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Growth Rate:</span>
                          <span className="text-green-700 font-bold text-lg">{market.growth}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 border-2 border-blue-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-blue-800">Target Customers</h3>
                      </div>
                      <p className="text-blue-700 leading-relaxed text-lg">
                        {market.customers}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-purple-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <Globe className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-2xl font-bold text-purple-800">Market Trends</h3>
                      </div>
                      <ul className="space-y-3">
                        {market.trends.map((trend, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-purple-600 text-xl mr-3">🔮</span>
                            <span className="text-purple-700 font-medium">{trend}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6 border-2 border-orange-400 shadow-lg">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-2xl font-bold text-orange-800">Revenue Potential</h3>
                      </div>
                      <p className="text-orange-700 leading-relaxed text-lg">
                        With the growing market and your unique approach, this startup has strong revenue potential. Focus on solving real problems and building a loyal customer base.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'guide' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-lg p-8 border-2 border-yellow-400 shadow-lg">
                    <div className="flex items-center mb-6">
                      <Target className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-3xl font-bold text-amber-800">Your 3-Step Magical Journey</h3>
                    </div>
                    <div className="space-y-8">
                      {startupIdea.threeStepGuide.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-start bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500"
                        >
                          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-purple-800 mb-2">
                              Step {index + 1}: {index === 0 ? 'Research & Validate' : index === 1 ? 'Build & Test' : 'Launch & Scale'}
                            </h4>
                            <p className="text-purple-700 leading-relaxed text-lg">{step}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="bg-amber-50 p-8 border-t-2 border-yellow-400">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onTryAgain}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 flex items-center space-x-3"
                >
                  <RefreshCw size={24} />
                  <span>Discover Another Destiny</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className={`font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center space-x-3 ${
                    isPro
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600'
                  }`}
                >
                  <Download size={24} />
                  <span>{isPro ? 'Download Magical Scroll' : 'Download (Pro)'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCustomize}
                  className={`font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center space-x-3 ${
                    isPro
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600'
                  }`}
                >
                  <span>🪄</span>
                  <span>{isPro ? 'Customize Your Idea' : 'Customize (Pro)'}</span>
                </motion.button>
              </div>

              {!isPro && (
                <div className="text-center">
                  <p className="text-amber-700 mb-3 text-lg">
                    🌟 Want more magical features? Unlock the full power of LaunchGrove! 🌟
                  </p>
                  <button
                    onClick={() => setShowUpgradeModal(true)}
                    className="text-purple-600 hover:text-purple-800 font-bold text-lg underline transition-colors"
                  >
                    View Pro Features & Upgrade ✨
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <WhisperingScrollModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={onUpgrade}
      />
    </div>
  );
};