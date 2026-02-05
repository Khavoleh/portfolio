import { describe, expect, it } from 'vitest';
import { getLanguageStaticPaths } from './getLanguageStaticPaths';

describe('getLanguageStaticPaths', () => {
  it('should return static paths for all supported languages', () => {
    const paths = getLanguageStaticPaths();

    expect(paths).toHaveLength(2);
    expect(paths).toContainEqual({ params: { lang: 'en' } });
    expect(paths).toContainEqual({ params: { lang: 'uk' } });
  });

  it('should return paths in correct format for Astro', () => {
    const paths = getLanguageStaticPaths();

    paths.forEach((path) => {
      expect(path).toHaveProperty('params');
      expect(path.params).toHaveProperty('lang');
      expect(typeof path.params.lang).toBe('string');
    });
  });
});
