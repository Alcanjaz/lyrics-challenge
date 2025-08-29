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

  test('displays six album cards', async ({ page }) => {
    // Each card has an image with alt starting with "Artwork"
    await expect(page.getByRole('img', { name: /Artwork/i })).toHaveCount(6);
    // And a title heading per card
    await expect(
      page.getByRole('heading', { level: 3, name: /Album/i })
    ).toHaveCount(6);
  });
});
