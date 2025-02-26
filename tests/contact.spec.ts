import { test, expect } from "@playwright/test"
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {

    let contactpg: ContactPage;

    test('Fill contact form and Verify success message', async ({ page }) => {

        contactpg = new ContactPage(page);

            //Open contact page
        await contactpg.navigate();

        //Fill contact form and submit 
        contactpg.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(),faker.lorem.paragraph(2));

        //add soft assertion to verify the entered message 
        // await expect.soft(page.locator('.contact-message textarea')).toHaveText('success message failed');
        // expect(test.info().errors.length).toBeLessThan(1);

        //Verify success message
        await expect(contactpg.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})
