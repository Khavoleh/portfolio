import type { ImageMetadata } from 'astro';

export interface Review {
  name: string;
  position: string;
  company: string;
  text: string;
  image: ImageMetadata;
}
