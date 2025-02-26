import { test, expect } from "@playwright/test"
import HomePage from "../pages/home.page";


test.describe('Home', () => {
    let homePg: HomePage;

    test.beforeEach(async ({ page }) => {
        homePg = new HomePage(page);
        await homePg.navigate();
    })
    
    test('Open home page and Verify title', async ({ page }) => {

        //Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

        test('Open about page and Verify Title', async ({ page }) => {
            //Open Url
        await page.goto('https://practice.sdetunicorns.com/about/');

        //Verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    
        })

        test('Click on get started button', async ({ page }) => {

        await expect(page).not.toHaveURL('/.*#get-started/');

        //click the button 
        await homePg.getStartedButton.click();
        
        //Verify title
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        await expect(page).toHaveURL(/.*#get-started/);
    
        })


        test('Verify heading text is visible using text selector', async ({ page }) => {

        //Find the text locator
        const headingText = await homePg.headingText;

        //Verify heading text is visible
        await expect(headingText).toBeVisible();
        await expect(headingText).not.toBeHidden();
        
    
        })

        test('Verify home link is enabled by text and css selector', async ({ page }) => {

        //Find the home text
        const homeText = await homePg.homeText;

        //Verify home text is visible
        await expect(homeText).toBeEnabled();
    
        })

        test('Verify search icon is visible by xpath selector', async ({ page }) => {

        //Find the search icon
        const searchIcon = await homePg.searchIcon;

        //Verify home text is visible
        await expect(searchIcon).toBeVisible();
    
        })

        test('Verify text of all navigation links', async ({ page }) => {

            const expectedLinks = [
                "Home",
                "About",
                "Shop",
                "Blog",
                "Contact",
                "My account"
            ];

        //Verify verify navigation links text
         expect(await homePg.getNavLinksText()).toEqual(expectedLinks);

        // //print out all the texts
        // for ( const element of await navLinks.elementHandles()) {
        //     console.log(await element.textContent())
        // }

        //  const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        //  //expect(await navLinks.textContent()).toEqual(expectedLinks[3]); 
        //  expect(await navLinks.textContent()).toEqual("Blog");

    
        })        

        // test('Verify the success pop up after filling contact page form ', async ({ page }) => {
        //     //Open Url
        // await page.goto('https://practice.sdetunicorns.com/contact');

        // //Scroll the page until contact form is visible 
        // await page.getByText('Send Us Message').scrollIntoViewIfNeeded();

        // //Enter the details in textbox and click on submit button 
        // await page.getByLabel('Name').fill('TestUser');
        // await page.getByLabel('email').fill('TestUser@gmail.com');
        // await page.getByLabel('Phone').fill('0123456789');
        // await page.getByLabel('Message').fill('TestUser is live');
        // await page.getByRole('button',{name:'Submit'}).click();

        // // Verify the success popup to be visible 
        // const successAlert = page.locator('div[role="alert"]');
        // await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    
        // })
})


