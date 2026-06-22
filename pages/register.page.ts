import { Page } from "@playwright/test";
export class RegisterPage {

    constructor(private page: Page) {

    }

    async registerNewUserFirstName(firstName: string) {
        await this.page.locator('[id="customer.firstName"]').fill(firstName);

    };

    async registerNewUserLastName(lastName: string) {
        await this.page.locator('[id="customer.lastName"]').fill(lastName);

    };

    async registerNewUserAddress(address: string) {
        await this.page.locator('[id="customer.address.street"]').fill(address);

    };

    async registerNewUserCity(city: string) {
        await this.page.locator('[id="customer.address.city"]').fill(city);

    }

    async registerNewUserState(state: string) {
        await this.page.locator('[id="customer.address.state"]').fill(state);

    }

    async registerNewUserZipCode(zipCode: string) {
        await this.page.locator('[id="customer.address.zipCode"]').fill(zipCode);

    }

    async registerNewUserPhone(Phone: string) {
        await this.page.locator('[id="customer.phoneNumber"]').fill(Phone);

    }

    async registerNewUserSsn(ssn: string) {
        await this.page.locator('[id="customer.ssn"]').fill(ssn);

    }

    async registerNewUserName(userName: string) {
        await this.page.locator('[id="customer.username"]').fill(userName);

    }

    async registerNewUserPassword(password: string) {
        await this.page.locator('[id="customer.password"]').fill(password);

    }

    async registerNewUserConfirmPassword(confirmPassword: string) {
        await this.page.locator('[id="repeatedPassword"]').fill(confirmPassword);

    }

    async registerNewUserButton() {
        await this.page.getByRole('button', { name: 'Register' }).click();
    }

    async registerNewUser(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zipCode: string,
        phone: string,
        ssn: string,
        userName: string,
        password: string
    ) {
        await this.page.locator('[id="customer.firstName"]').fill(firstName);
        await this.page.locator('[id="customer.lastName"]').fill(lastName);
        await this.page.locator('[id="customer.address.street"]').fill(address);
        await this.page.locator('[id="customer.address.city"]').fill(city);
        await this.page.locator('[id="customer.address.state"]').fill(state);
        await this.page.locator('[id="customer.address.zipCode"]').fill(zipCode);
        await this.page.locator('[id="customer.phoneNumber"]').fill(phone);
        await this.page.locator('[id="customer.ssn"]').fill(ssn);
        await this.page.locator('[id="customer.username"]').fill(userName);
        await this.page.locator('[id="customer.password"]').fill(password);
        await this.page.locator('[id="repeatedPassword"]').fill(password);
        
        // Wait for navigation after clicking Register
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle' }),
            this.page.getByRole('button', { name: 'Register' }).click()
        ]);
        
        // Wait for success message to appear
        await this.page.locator('#rightPanel p').waitFor({ state: 'visible', timeout: 5000 });
    }

}
