
export interface GeneratedImage {
  id: string;
  src: string;
  prompt: string;
  aspectRatio: AspectRatio;
  timestamp: number;
}

export interface GenerationState {
  isLoading: boolean;
  currentPrompt: string | null;
  error: string | null;
}

export enum AspectRatio {
  SQUARE = "1:1",
  LANDSCAPE = "16:9",
  PORTRAIT = "9:16",
  STANDARD = "4:3",
  WIDE_PORTRAIT = "3:4"
}

export type ViewMode = 'grid' | 'masonry' | 'list';

export type Language = 'en' | 'ko';
