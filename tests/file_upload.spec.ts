import { test, expect } from '@playwright/test';
import path from 'path';

test('file upload test with size restriction', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload');

  const fileInput = await page.locator('input[type="file"]');
  const filePath = path.resolve(__dirname, 'files', 'Adlin_Resume.pdf');

  await fileInput.setInputFiles(filePath);
  await page.locator('button:has-text("Upload")').click();

  
  await page.screenshot({ path: 'upload-page.png', fullPage: true });

  
  const successMessageLocator = page.locator('h1:has-text("File Uploaded!")');
  await expect(successMessageLocator).toBeVisible({ timeout: 30000 });

  const successMessage = await successMessageLocator.textContent();
  expect(successMessage).toContain('File Uploaded!');
});

