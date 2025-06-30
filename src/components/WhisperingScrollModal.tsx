import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { subscriptionPlans } from '../data/subscriptions';

interface WhisperingScrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

export const WhisperingScrollModal: React.FC<WhisperingScrollModalProps> = ({
  isOpen,
  onClose,
  onUpgrade
}) => {
  const proFeatures = subscriptionPlans.find(plan => plan.type === 'pro')?.features || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 rounded-xl p-8 max-w-md w-full mx-4 border-4 border-yellow-600 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-2"
              >
                📜
              </motion.div>
              <h2 className="text-2xl font-bold text-amber-800 mb-2">
                The Whispering Scroll Has Appeared...
              </h2>
              <p className="text-amber-700">
                Unlock the full magic of LaunchGrove with Pro features!
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {proFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-amber-800 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onUpgrade}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
              >
                🔐 Unlock the Vault - ₹299/month
              </motion.button>
              
              <button
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors underline"
              >
                Cast 'Not Nowius' ✨
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};