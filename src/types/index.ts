export interface NameSuggestion {
  id: string;
  name: string;
  isFavorite: boolean;
  description?: string;
}

export interface GenerationFilters {
  type: string;
  style?: string;
  category?: string;
  language?: string;
  size?: string;
  gender?: string;
  quantity: number;
}

export interface FilterStep {
  id: string;
  title: string;
  question: string;
  options: FilterOption[];
  required: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface FilterFlow {
  type: string;
  steps: FilterStep[];
}

export type Screen = 'splash' | 'onboarding' | 'main' | 'results' | 'favorites' | 'error';

export interface OnboardingSlide {
  title: string;
  description: string;
  icon: string;
}