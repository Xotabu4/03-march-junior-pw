import { Page } from "@playwright/test";

export const login = (page: Page) => ({
    async open() {
        await page.goto('/login')
    },
    async doLogin(email: string, password: string) {
        await this.open();
        await page.getByRole('main').getByPlaceholder('Please Enter Your Email')
            .fill(email);
        await page.getByPlaceholder('Please Enter Your Password')
            .fill(password);
        await page.getByPlaceholder('Please Enter Your Password').press('Enter');
    }
})