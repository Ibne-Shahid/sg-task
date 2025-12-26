import type { ReactNode } from 'react'; 

export type ChallengeLevel = 'Easy' | 'Medium' | 'Hard';

export interface Story {
  id: string;
  title: string;
  imageUrl: string;
}

export interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}