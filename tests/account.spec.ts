
import { test, expect } from '@playwright/test';

test.describe('MyAccount', () => {
    test('Access orders page', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator(`li a[href *= 'orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
    })
    

    test('Access download page', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator(`li a[href *= 'downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    });
});

test.describe('Account Page', () => {
    test.use({storageState: 'notLoggedInState.json' });

    test('Verify Login and Register text is visible', async ({ page }) => {
        await page.goto('/my-account');
        await expect(page.locator('form[class*="login"]')).toBeVisible();
        await expect(page.locator('form[class*="register"]')).toBeVisible();
    });
});
