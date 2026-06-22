import { Page } from "@playwright/test";

export class AccountServicePage {

    constructor(private page: Page) {

    }

    getloginSuccessfullLog() {
        return this.page.locator('#rightPanel p');
    }

    async accountOverViewLink() {
        await this.page.getByRole('link', { name: 'Accounts Overview' }).click();
    }

}
