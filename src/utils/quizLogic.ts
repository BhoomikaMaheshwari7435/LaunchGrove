import { QuizAnswer, StartupIdea } from '../types';
import { startupIdeas } from '../data/startupIdeas';

export function generateStartupIdea(answers: QuizAnswer[]): StartupIdea {
  console.log('Generating startup idea from answers:', answers);
  
  // Enhanced algorithm to match answers to startup ideas based on user responses
  const answerCounts = answers.reduce((acc, answer) => {
    acc[answer.selectedOption] = (acc[answer.selectedOption] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  console.log('Answer counts:', answerCounts);

  // Determine dominant traits based on answer patterns
  const dominantOption = Object.entries(answerCounts)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || '0';

  console.log('Dominant option:', dominantOption);

  // Map answer patterns to houses
  const houseMapping = {
    '0': 'gryffindor',    // Bold, risk-taking answers
    '1': 'hufflepuff',    // Patient, community-focused answers  
    '2': 'ravenclaw',     // Strategic, analytical answers
    '3': 'slytherin'      // Ambitious, goal-oriented answers
  } as const;

  const selectedHouse = houseMapping[dominantOption as keyof typeof houseMapping] || 'gryffindor';
  console.log('Selected house:', selectedHouse);
  
  // Filter ideas by house preference, fallback to random if none match
  const houseIdeas = startupIdeas.filter(idea => idea.house === selectedHouse);
  const availableIdeas = houseIdeas.length > 0 ? houseIdeas : startupIdeas;
  
  console.log('Available ideas for house:', availableIdeas.length);
  
  // Select a random idea from the filtered set
  const selectedIdea = availableIdeas[Math.floor(Math.random() * availableIdeas.length)];
  
  // Generate founder insights
  const insights = generatePersonalizedInsights(answers);
  
  // Personalize the idea based on user answers
  const personalizedIdea = {
    ...selectedIdea,
    house: selectedHouse,
    founderType: insights.founderType,
    id: `idea-${Date.now()}`,
    // Add some personalization based on answer patterns
    whySuitableForUser: `Based on your quiz responses showing ${insights.founderType.toLowerCase()} traits, ${selectedIdea.whySuitableForUser.toLowerCase()}`
  };
  
  console.log('Generated personalized idea:', personalizedIdea);
  return personalizedIdea;
}

export function shouldShowUpgradePopup(quizAttempts: number, isPro: boolean): boolean {
  if (isPro) return false;
  
  // Show upgrade popup after first quiz or when user tries again without pro
  return quizAttempts === 1 || quizAttempts >= 2;
}

export function generatePersonalizedInsights(answers: QuizAnswer[]): {
  founderType: string;
  strengths: string[];
  recommendations: string[];
} {
  // Analyze answers to provide personalized insights
  const answerPattern = answers.map(a => a.selectedOption);
  
  // Simple pattern matching for founder types
  const riskTaking = answerPattern.filter(a => a === 0).length;
  const collaborative = answerPattern.filter(a => a === 1).length;
  const analytical = answerPattern.filter(a => a === 2).length;
  const ambitious = answerPattern.filter(a => a === 3).length;

  let founderType = 'The Balanced Entrepreneur';
  let strengths: string[] = [];
  let recommendations: string[] = [];

  if (riskTaking >= 4) {
    founderType = 'The Bold Innovator';
    strengths = ['Risk-taking', 'Quick decision making', 'Innovation-focused'];
    recommendations = ['Consider market validation', 'Build a strong advisory team', 'Focus on sustainable growth'];
  } else if (collaborative >= 4) {
    founderType = 'The Community Builder';
    strengths = ['Team building', 'Stakeholder management', 'Social impact focus'];
    recommendations = ['Leverage your network', 'Focus on user-centric solutions', 'Build strong partnerships'];
  } else if (analytical >= 4) {
    founderType = 'The Strategic Thinker';
    strengths = ['Data-driven decisions', 'Strategic planning', 'Problem-solving'];
    recommendations = ['Trust your instincts too', 'Move fast on validated ideas', 'Balance analysis with action'];
  } else if (ambitious >= 4) {
    founderType = 'The Growth Hacker';
    strengths = ['Goal-oriented', 'Scaling mindset', 'Results-focused'];
    recommendations = ['Focus on sustainable practices', 'Build strong foundations', 'Consider long-term impact'];
  }

  console.log('Generated founder insights:', { founderType, strengths, recommendations });
  return { founderType, strengths, recommendations };
}