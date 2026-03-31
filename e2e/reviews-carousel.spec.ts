import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

test('carousel next and previous buttons change the current review', async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'domcontentloaded' });

  const carousel = page.locator('#reviews-carousel');

  const getCarouselScrollLeft = async () =>
    carousel.evaluate((node) => {
      const element = node as HTMLElement;
      return Math.round(element.scrollLeft);
    });

  const initialScrollLeft = await getCarouselScrollLeft();

  await page.locator('#review-0 button[aria-label="Next slide"]').click();
  await expect.poll(getCarouselScrollLeft).toBeGreaterThan(initialScrollLeft);

  const afterNextScrollLeft = await getCarouselScrollLeft();

  await page.locator('#review-1 button[aria-label="Previous slide"]').click();
  await expect.poll(getCarouselScrollLeft).toBeLessThan(afterNextScrollLeft);
});
