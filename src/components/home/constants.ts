import type { Metric } from '@shared/metric/interfaces.ts';
import type { Review } from '@shared/review/interfaces.ts';
import viktoria from './images/viktoria-monastyrska.jpeg';
import mykola from './images/mykola-synhalevych.jpeg';
import pavlo from './images/pavlo-demskyi.png';
import valerii from './images/valerii-inshyn.jpeg';

export const METRICS: Metric[] = [
  { value: '3+', name: 'metrics.0.name', description: 'metrics.0.description' },
  { value: '5x', name: 'metrics.1.name', description: 'metrics.1.description' },
  { value: '6', name: 'metrics.2.name', description: 'metrics.2.description' },
  { value: '100%', name: 'metrics.3.name', description: 'metrics.3.description' },
];

export const REVIEWS: Review[] = [
  {
    name: 'reviews.0.name',
    position: 'reviews.0.position',
    company: 'Bliscore Software',
    text: 'reviews.0.text',
    image: viktoria,
  },
  {
    name: 'reviews.1.name',
    position: 'reviews.1.position',
    company: 'Bliscore Software',
    text: 'reviews.1.text',
    image: mykola,
  },
  {
    name: 'reviews.2.name',
    position: 'reviews.2.position',
    company: 'Bliscore Software',
    text: 'reviews.2.text',
    image: pavlo,
  },
  {
    name: 'reviews.3.name',
    position: 'reviews.3.position',
    company: 'Bliscore Software',
    text: 'reviews.3.text',
    image: valerii,
  },
];
