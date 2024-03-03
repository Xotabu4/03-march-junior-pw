import { randomUUID } from 'crypto';
import { test, expect } from '@playwright/test';

test('User can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  
  await page.getByPlaceholder('You Full Name').fill('test');
  await page.getByPlaceholder('Your Email Address').fill(`xotabu4+${randomUUID()}@gmail.com`);
  await page.getByPlaceholder('Please Describe Your Message').fill('Why your cannery is so good? tesatlaksjdflaskjdflasjdl fj');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Please Describe Your Message')).toBeEmpty();
});