import type { ImageSourcePropType } from 'react-native';

export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  muted: string;
  border: string;
  chip: string;
  accent: string;
};

export type ProjectPhoto = {
  label: string;
  source: ImageSourcePropType;
};

export type ProfileData = {
  name: string;
  course: string;
  role: string;
  summary: string;
  linkedin: string;
  github: string;
  email: string;
  initials: string;
  avatar: ImageSourcePropType;
};

export type ProjectSection = {
  semester: string;
  title: string;
  description: string;
  partner: string;
  links: string[];
  photos: ProjectPhoto[];
  accent: string;
};