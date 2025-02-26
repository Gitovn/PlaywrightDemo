import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe('Blog', () => {
    let blogpg: BlogPage;

    test('Verify recent posts count and Verify the length of each list item', async ({ page }) => {
        blogpg = new BlogPage(page);

        // Open blog page
        await blogpg.navigate();

        // Loop through the posts list and add assertion on char length
        for (const element of await blogpg.recentPostsList.elementHandles()) {
            // console.log(await element.textContent());
            expect((await element.textContent())?.trim().length).toBeGreaterThan(10);
        }

        // Find the total list count
        expect(await blogpg.recentPostsList.count()).toEqual(5);
    })
})