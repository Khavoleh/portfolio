import mykola from './images/mykola-synhalevych.jpeg';
import pavlo from './images/pavlo-demskyi.jpeg';
import valerii from './images/valerii-inshyn.jpeg';
import viktoria from './images/viktoria-monastyrska.jpeg';
import type { Review } from './review';

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
