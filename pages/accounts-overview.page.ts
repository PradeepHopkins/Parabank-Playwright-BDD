import { Page } from "@playwright/test";

export class AccountsOverviewPage {

    constructor(private page: Page) {

    }

    async getBalance() {
        const balance = await this.page.locator('table tbody tr td').nth(1).textContent();

        console.log(`Account Balance : ${balance}`);

        return balance;
        // locator('b').filter({ hasText: '$' })
    }
}
