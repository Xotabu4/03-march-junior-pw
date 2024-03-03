import { Page } from "@playwright/test";

export async function doLogin(page: Page, email: string, password: string) {
    await page.getByRole('link', { name: 'Welcome! ' }).click();
    await page.getByRole('menuitem', { name: 'Login' }).click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email')
        .fill(email);
    await page.getByPlaceholder('Please Enter Your Password')
        .fill(password);
    await page.getByPlaceholder('Please Enter Your Password').press('Enter');
}