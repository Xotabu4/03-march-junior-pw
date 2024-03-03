import { test, expect, Page } from '@playwright/test';
import { doLogin } from '../steps/login';

test('User can buy product', async ({ page }) => {
  await page.goto('/');

  await doLogin(page, 'xotabu4@gmail.com', 'xotabu4@gmail.com');

  await page.getByRole('link', { name: 'MERN Store' }).click();
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();

  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();

  // ASSERT
  await expect(page.locator('h2', { hasText: 'Thank you for your order.' }))
    .toBeVisible();

  await expect(page.locator('..'), 'error message').toHaveText('HELLO', {
    timeout: 60000,
  });
});