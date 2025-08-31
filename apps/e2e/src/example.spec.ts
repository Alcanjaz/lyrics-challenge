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

  test('renders header with logo, filters, and search', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Lyric logo' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Show all genres' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Search bands' })).toBeVisible();
  });

  test('displays band cards with images and titles', async ({ page }) => {
    const main = page.locator('main');
    const images = main.getByRole('img', { name: /Artwork/i });
    const titles = main.getByRole('heading', { level: 3 });
    const imageCount = await images.count();
    const titleCount = await titles.count();
    expect(imageCount).toBeGreaterThan(0);
    expect(titleCount).toBeGreaterThan(0);
    expect(imageCount).toEqual(titleCount);
  });

  test('Genre filters toggle and update results', async ({ page }) => {
    const titles = page.locator('main').getByRole('heading', { level: 3 });
    const initialCount = await titles.count();

    // Toggle first genre
    const firstGenre = page.getByRole('button', { name: /^Filter by / }).first();
    await firstGenre.click();

    // URL contains genres param and result count shrinks or stays <= initial
    await expect(page).toHaveURL(/\?(.+&)?genres=/);
    const filteredCount = await titles.count();
    expect(filteredCount).toBeLessThanOrEqual(initialCount);

    // aria-pressed reflects selection
    await expect(firstGenre).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: 'Show all genres' })).toHaveAttribute('aria-pressed', 'false');

    // Clear using "All" and verify URL/query cleared and count restored
    await page.getByRole('button', { name: 'Show all genres' }).click();
    await expect(page).not.toHaveURL(/[?&]genres=/);
    const clearedCount = await titles.count();
    expect(clearedCount).toEqual(initialCount);
  });

  test('can select multiple genres and they appear as repeated params', async ({ page }) => {
    const titles = page.locator('main').getByRole('heading', { level: 3 });
    const initialCount = await titles.count();

    const genreButtons = page.getByRole('button', { name: /^Filter by / });
    await genreButtons.nth(0).click();
    await genreButtons.nth(1).click();

    // Expect two occurrences of genres= in the URL
    await expect(page).toHaveURL(/genres=[^&]+(&|$).*genres=[^&]+/);

    const filteredCount = await titles.count();
    expect(filteredCount).toBeLessThanOrEqual(initialCount);

    // Clear filters
    await page.getByRole('button', { name: 'Show all genres' }).click();
    await expect(page).not.toHaveURL(/[?&]genres=/);
  });

  test('Search shows no-results state for unknown term', async ({ page }) => {
    const input = page.getByRole('textbox', { name: 'Search bands' });
    await input.fill('qzxqzxqzxqzx');

    await expect(page).toHaveURL(/search=qzxqzxqzxqzx/);
    await expect(page.getByRole('heading', { level: 3, name: 'No results' })).toBeVisible();
    await expect(page.getByText(/No albums match the search “qzxqzxqzxqzx”/)).toBeVisible();

    // Clear search restores results
    await input.fill('');
    await expect(page).not.toHaveURL(/[?&]search=/);
    expect(await page.locator('main').getByRole('heading', { level: 3 }).count()).toBeGreaterThan(0);
  });

  test('Welcome message can be dismissed by click', async ({ page }) => {
    const closeBtn = page.getByRole('button', { name: 'Close welcome message' });
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
    await expect(closeBtn).toBeHidden();
  });

  test('Welcome message close button is keyboard accessible', async ({ page }) => {
    const closeBtn = page.getByRole('button', { name: 'Close welcome message' });
    await expect(closeBtn).toBeVisible();
    await closeBtn.press('Space');
    await expect(closeBtn).toBeHidden();
  });
});
