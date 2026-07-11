import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getUkraineTimezone } from './get-ukraine-timezone';

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
    // Ukraine switches at 01:00 UTC. Instants are anchored in UTC so the
    // assertions are independent of the test runner's local timezone.

    // In 2026, DST starts on the last Sunday of March (March 29) at 01:00 UTC.
    it('should return UTC+2 (EET) just before DST starts (2026-03-29 00:59 UTC)', () => {
      vi.setSystemTime(new Date('2026-03-29T00:59:00Z'));
      expect(getUkraineTimezone()).toBe('UTC+2 (EET)');
    });

    it('should return UTC+3 (EEST) right after DST starts (2026-03-29 01:00 UTC)', () => {
      vi.setSystemTime(new Date('2026-03-29T01:00:00Z'));
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    // In 2026, DST ends on the last Sunday of October (October 25) at 01:00 UTC.
    it('should return UTC+3 (EEST) just before DST ends (2026-10-25 00:59 UTC)', () => {
      vi.setSystemTime(new Date('2026-10-25T00:59:00Z'));
      expect(getUkraineTimezone()).toBe('UTC+3 (EEST)');
    });

    it('should return UTC+2 (EET) right after DST ends (2026-10-25 01:00 UTC)', () => {
      vi.setSystemTime(new Date('2026-10-25T01:00:00Z'));
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
