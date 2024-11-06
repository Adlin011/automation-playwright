import { test, expect } from '@playwright/test';

test.describe('Login Test', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form
    await page.fill('input[name="username"]', 'your-username');
    await page.fill('input[name="password"]', 'your-password');

    // Click the login button
    await page.click('button[type="submit"]');

    // Assertion: Verify the user is redirected to the dashboard or home page
    await expect(page).toHaveURL('https://example.com/dashboard');

    // Verify a specific element (e.g., a logout button or a welcome message) to confirm login
    await expect(page.locator('text=Welcome')).toBeVisible();
  });
});
