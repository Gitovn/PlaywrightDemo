import { test, expect } from "@playwright/test"
import CartPage from "../pages/cart.page";
import path from 'path';

test.describe('File upload', () => {
    let cartpg: CartPage;

    const fileName = ['Kelv image.jpg','3mb-file.pdf']

    for(const name of fileName) {

    test(`Verify file ${name} upload case on hidden input field`, async ({ page }) => {

        cartpg = new CartPage(page);

        //Open url 
        await page.goto("https://practice.sdetunicorns.com/cart/");

        //provide file path 
        const filePath = path.join(__dirname,`../data/${name}`);

        //upload file 
        cartpg.UploadComponent().uploadFile(filePath);

        //verify success message
        await expect(cartpg.UploadComponent().successText).toContainText('uploaded successfully',{timeout:10000}); 
    })
}



test.skip('should upload a test file on a hidden input field', async ({ page }) => {
        
    cartpg = new CartPage(page);

    //Open url 
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide file path 
    const filePath = path.join(__dirname,'../data/logotitle.png');

    //DOM manipulation
    await page.evaluate(() => {
        const selector = document.querySelector('input#upfile_1');
        if(selector){
            selector.className='';
        }
    })

    //upload file 
    cartpg.UploadComponent().uploadFile(filePath);

    //Harcoded sleep - wrong way - this method should not be used 
    // await page.waitForTimeout(5000);

    //conditional wait 
    // await page.locator('wfu_messageblock_header_1_1').waitFor({state: 'visible', timeout: 10000});

    // add assertion to verify success message (assertion wait is added here )
    await expect(cartpg.UploadComponent().successText).toContainText('uploaded successfully',{timeout:10000}); 
})


})


