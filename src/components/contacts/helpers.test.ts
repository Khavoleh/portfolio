import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getUkraineTimezone } from './helpers';

describe('getUkraineTimezone', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Winter time (EET - UTC+2)', () => {
    it('should return UTC+2 (EET) in January', () => {
      vi.setSystemTime(new Date(2026, 0, 15, 12, 0, 0)); // January 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+2 (EET) in February', () => {
      vi.setSystemTime(new Date(2026, 1, 15, 12, 0, 0)); // February 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+2 (EET) in early March before DST starts', () => {
      vi.setSystemTime(new Date(2026, 2, 15, 12, 0, 0)); // March 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+2 (EET) in November', () => {
      vi.setSystemTime(new Date(2026, 10, 15, 12, 0, 0)); // November 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+2 (EET) in December', () => {
      vi.setSystemTime(new Date(2026, 11, 15, 12, 0, 0)); // December 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });
  });

  describe('Summer time (EEST - UTC+3)', () => {
    it('should return UTC+3 (EEST) in April', () => {
      vi.setSystemTime(new Date(2026, 3, 15, 12, 0, 0)); // April 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should return UTC+3 (EEST) in June', () => {
      vi.setSystemTime(new Date(2026, 5, 15, 12, 0, 0)); // June 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should return UTC+3 (EEST) in August', () => {
      vi.setSystemTime(new Date(2026, 7, 15, 12, 0, 0)); // August 15, 2026
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should return UTC+3 (EEST) in early October before DST ends', () => {
      vi.setSystemTime(new Date(2026, 9, 10, 12, 0, 0)); // October 10, 2026
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });
  });

  describe('DST transition boundaries', () => {
    // In 2026, last Sunday of March is March 29
    it('should return UTC+2 (EET) just before DST starts (March 29, 2026 at 02:59)', () => {
      vi.setSystemTime(new Date(2026, 2, 29, 2, 59, 0)); // March 29, 2026 02:59
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+3 (EEST) right after DST starts (March 29, 2026 at 03:00)', () => {
      vi.setSystemTime(new Date(2026, 2, 29, 3, 0, 0)); // March 29, 2026 03:00
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    // In 2026, last Sunday of October is October 25
    it('should return UTC+3 (EEST) just before DST ends (October 25, 2026 at 03:59)', () => {
      vi.setSystemTime(new Date(2026, 9, 25, 3, 59, 0)); // October 25, 2026 03:59
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should return UTC+2 (EET) right after DST ends (October 25, 2026 at 04:00)', () => {
      vi.setSystemTime(new Date(2026, 9, 25, 4, 0, 0)); // October 25, 2026 04:00
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });
  });

  describe('Different years', () => {
    it('should handle year 2024 correctly (summer)', () => {
      vi.setSystemTime(new Date(2024, 6, 15, 12, 0, 0)); // July 15, 2024
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should handle year 2024 correctly (winter)', () => {
      vi.setSystemTime(new Date(2024, 0, 15, 12, 0, 0)); // January 15, 2024
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should handle year 2030 correctly (summer)', () => {
      vi.setSystemTime(new Date(2030, 5, 15, 12, 0, 0)); // June 15, 2030
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });
  });
});
