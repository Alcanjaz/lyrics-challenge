import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows accessible page heading', async ({ page }) => {
    // The main heading is visually hidden but present for a11y
    await expect(
      page.getByRole('heading', { level: 1, name: 'Lyric Challenge' })
    ).toBeVisible();
  });

  test('renders header with logo and Home button', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Lyric logo' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
  });

  test('displays twelve band cards', async ({ page }) => {
    // Each card has an image with alt starting with "Artwork"
    await expect(page.getByRole('img', { name: /Artwork/i })).toHaveCount(12);
    // Each card has a title as an h3 (band name)
    await expect(page.getByRole('heading', { level: 3 })).toHaveCount(12);
    // Sanity check: first known band is visible
    await expect(page.getByRole('heading', { level: 3, name: 'The Velvet Echo' })).toBeVisible();
  });
});
