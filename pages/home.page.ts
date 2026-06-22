import { Page } from "@playwright/test";

export class HomePage {
    constructor(private page: Page) {}

    async registerLink() {
        await this.page.getByRole('link', { name: 'Register' }).click();
    }
}
