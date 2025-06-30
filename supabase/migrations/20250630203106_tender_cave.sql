/*
  # Populate Quiz Questions

  1. New Data
    - Insert 30 quiz questions into the `quiz_questions` table
    - Questions cover business, personality, interests, and skills categories
    - Each question has 4 multiple choice options

  2. Data Structure
    - Uses the existing table structure with id, question, option_a, option_b, option_c, option_d
    - Questions are designed for startup idea generation and founder personality assessment
*/

-- Clear existing questions first
DELETE FROM quiz_questions;

-- Insert 30 quiz questions
INSERT INTO quiz_questions (id, question, option_a, option_b, option_c, option_d) VALUES
(1, 'What magical realm excites you most as an entrepreneur?', 'Technology & Innovation Spells', 'Sustainable & Green Magic', 'Health & Wellness Potions', 'Creative Arts & Entertainment'),
(2, 'Which founder trait describes you best?', 'Bold Risk-Taker (Gryffindor Spirit)', 'Patient Builder (Hufflepuff Dedication)', 'Strategic Thinker (Ravenclaw Wisdom)', 'Ambitious Achiever (Slytherin Drive)'),
(3, 'What size of magical impact do you want to create?', 'Local Community Magic', 'National Transformation', 'Global Wizarding Revolution', 'Niche Specialized Enchantment'),
(4, 'Which magical skill comes naturally to you?', 'Persuasion & Communication Charms', 'Problem-Solving & Logic Spells', 'Creative & Design Magic', 'Leadership & Team Building'),
(5, 'What motivates your entrepreneurial journey?', 'Financial Freedom & Wealth', 'Solving Important Problems', 'Creative Expression & Innovation', 'Building Something Lasting'),
(6, 'Which business model enchants you most?', 'Subscription-Based Magic', 'Marketplace & Platform Spells', 'Product Sales & E-commerce', 'Service-Based Consultancy'),
(7, 'What''s your preferred way to learn new spells?', 'Hands-on Experimentation', 'Reading Ancient Texts & Research', 'Learning from Master Wizards', 'Trial & Error Adventures'),
(8, 'Which magical challenge excites you most?', 'Scaling & Growth Enchantments', 'Innovation & Product Development', 'Marketing & Customer Acquisition', 'Operations & Efficiency Spells'),
(9, 'What''s your ideal startup timeline?', 'Quick Launch & Fast Results', 'Steady Growth Over Years', 'Long-term Vision (5+ years)', 'Flexible & Adaptive Journey'),
(10, 'Which magical industry calls to you?', 'EdTech & Learning Magic', 'FinTech & Money Spells', 'HealthTech & Healing Potions', 'Entertainment & Media Magic'),
(11, 'How do you handle magical setbacks?', 'Learn Quickly & Pivot Fast', 'Analyze Deeply & Plan Better', 'Seek Help from Fellow Wizards', 'Push Through with Determination'),
(12, 'What''s your magical working style?', 'Solo Wizard (Independent)', 'Small Coven (2-5 people)', 'Large Guild (Team of 10+)', 'Flexible & Situational'),
(13, 'Which startup funding spell appeals to you?', 'Bootstrap with Personal Magic', 'Angel Investor Patronus', 'Venture Capital Dragon', 'Crowdfunding Community Charm'),
(14, 'What magical problem keeps you up at night?', 'Environmental & Climate Issues', 'Education & Skill Development', 'Healthcare & Wellness', 'Social Connection & Community'),
(15, 'Your ideal magical workspace is:', 'High-energy Bustling Marketplace', 'Quiet Library for Deep Focus', 'Collaborative Open Courtyard', 'Flexible & Ever-changing'),
(16, 'Which magical technology excites you most?', 'Artificial Intelligence Spells', 'Blockchain & Crypto Magic', 'IoT & Connected Devices', 'AR/VR Immersive Worlds'),
(17, 'How do you measure magical success?', 'Revenue & Profit Growth', 'User Impact & Satisfaction', 'Innovation & Recognition', 'Personal Fulfillment & Balance'),
(18, 'Your magical leadership style is:', 'Inspiring Visionary Leader', 'Supportive Team Builder', 'Strategic Decision Maker', 'Hands-on Problem Solver'),
(19, 'Which magical market timing appeals to you?', 'Emerging Trends & Early Adoption', 'Proven Markets with Innovation', 'Underserved Niche Opportunities', 'Disruptive New Categories'),
(20, 'What''s your magical risk tolerance?', 'High Risk, High Reward Adventures', 'Calculated Strategic Risks', 'Conservative Steady Growth', 'Balanced & Diversified Approach'),
(21, 'Which magical customer segment interests you?', 'Young Digital Natives', 'Busy Working Professionals', 'Small Business Owners', 'Senior & Mature Audience'),
(22, 'Your magical innovation approach is:', 'Completely Original Creations', 'Improving Existing Solutions', 'Combining Different Ideas', 'Adapting Global Trends Locally'),
(23, 'Which magical social impact matters most?', 'Economic Empowerment', 'Environmental Sustainability', 'Education & Knowledge Sharing', 'Health & Wellness Improvement'),
(24, 'Your magical decision-making style is:', 'Quick Intuitive Choices', 'Data-Driven Analysis', 'Collaborative Team Decisions', 'Balanced Gut & Logic'),
(25, 'Which magical business challenge excites you?', 'Customer Acquisition & Growth', 'Product Development & Innovation', 'Operations & Scaling', 'Brand Building & Marketing'),
(26, 'Your magical work-life balance preference:', 'All-in Startup Dedication', 'Structured Work-Life Boundaries', 'Flexible & Seasonal Rhythms', 'Integration of Work & Life'),
(27, 'Which magical revenue model appeals to you?', 'One-time Product Sales', 'Recurring Subscription Magic', 'Commission-based Marketplace', 'Advertising & Sponsorship'),
(28, 'Your magical learning preference is:', 'Learning by Doing & Experimenting', 'Studying Best Practices & Cases', 'Mentorship & Guidance', 'Community & Peer Learning'),
(29, 'Which magical geographic focus interests you?', 'Local City & Regional Focus', 'National Indian Market', 'Global International Reach', 'Rural & Underserved Areas'),
(30, 'Your magical legacy goal is:', 'Building a Lasting Institution', 'Solving a Major World Problem', 'Inspiring Next Generation Entrepreneurs', 'Creating Financial Independence');