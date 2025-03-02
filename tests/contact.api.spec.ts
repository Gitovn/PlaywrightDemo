import { test, expect, APIRequestContext, APIResponse } from "@playwright/test"
import ContactPage from "../pages/contact.page";

test.describe('Contact', () => {
    let contactpg: ContactPage;
    let fakerApi: APIRequestContext;
    let randomPerson: APIResponse;


    test.beforeAll(async ({ playwright }) => {
        fakerApi = await playwright.request.newContext({ baseURL: 'https://jsonplaceholder.typicode.com/'});

        const response = await fakerApi.get('users');
        const responseBody = await response.json();
        randomPerson = responseBody[0];
    })
    
    test('Fill contact form and Verify success message', async ({ page }) => {
        contactpg = new ContactPage(page);

        //Open contact page
        await contactpg.navigate();

        //Fill out the input fields and submit 
        await contactpg.submitForm(
            randomPerson['name'],
            randomPerson['email'],
            randomPerson['phone'],
            randomPerson['website']
        );

        //add soft assertion to verify the entered message 
        // await expect.soft(page.locator('.contact-message textarea')).toHaveText('success message failed');
        // expect(test.info().errors.length).toBeLessThan(1);

        //Verify success message
        await expect(contactpg.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})
