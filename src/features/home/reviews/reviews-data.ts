import mykola from './images/mykola-synhalevych.jpeg';
import pavlo from './images/pavlo-demskyi.jpeg';
import valerii from './images/valerii-inshyn.jpeg';
import viktoria from './images/viktoria-monastyrska.jpeg';
import type { Review } from './review';

export const REVIEWS: Review[] = [
  {
    name: 'reviews_0_name',
    position: 'reviews_0_position',
    company: 'Bliscore Software',
    text: 'reviews_0_text',
    image: viktoria,
  },
  {
    name: 'reviews_1_name',
    position: 'reviews_1_position',
    company: 'Bliscore Software',
    text: 'reviews_1_text',
    image: mykola,
  },
  {
    name: 'reviews_2_name',
    position: 'reviews_2_position',
    company: 'Bliscore Software',
    text: 'reviews_2_text',
    image: pavlo,
  },
  {
    name: 'reviews_3_name',
    position: 'reviews_3_position',
    company: 'Bliscore Software',
    text: 'reviews_3_text',
    image: valerii,
  },
];
