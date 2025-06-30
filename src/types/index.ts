export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  location: string;
  nationality: string;
  isPro: boolean;
  badges: Badge[];
  quizAttempts: number;
  savedIdeas: StartupIdea[];
  createdAt: Date;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  category: 'business' | 'personality' | 'interests' | 'skills';
}

export interface QuizAnswer {
  questionId: string;
  selectedOption: number;
}

export interface StartupIdea {
  id: string;
  name: string;
  tagline: string;
  niche: string;
  description: string;
  whyItMatters: string;
  whySuitableForUser: string;
  threeStepGuide: string[];
  house: 'gryffindor' | 'hufflepuff' | 'ravenclaw' | 'slytherin';
  founderType: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: Date;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Subscription {
  type: 'free' | 'pro';
  price?: number;
  features: string[];
}