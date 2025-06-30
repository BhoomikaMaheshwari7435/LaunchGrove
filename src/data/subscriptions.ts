import { Subscription } from '../types';

export const subscriptionPlans: Subscription[] = [
  {
    type: 'free',
    features: [
      'Take the magical quiz',
      'Get 1 startup idea',
      'Basic founder personality insights',
      'Access to community'
    ]
  },
  {
    type: 'pro',
    price: 299,
    features: [
      '📜 Reveal More Scrolls - Unlock 2-3 extra startup ideas',
      '🖨 Download Startup Scroll (PDF) - Beautifully designed summary',
      '🧙‍♂ Founder House Deep Dive - Full personality insights',
      '✏ Customize Your Idea - Change niche, industry, or audience'
    ]
  }
];