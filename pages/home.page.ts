import { Page, Locator } from "@playwright/test";

class HomePage {

    page: Page;
    getStartedButton: Locator;
    headingText: Locator;
    homeText: Locator;
    searchIcon: Locator;
    navLinks: Locator;
  

    constructor(page: Page){
        this.page=page;
        this.getStartedButton = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
        this.searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        
    }

    async navigate(){
        await this.page.goto('/');
    }

    getNavLinksText(){
        return this.navLinks.allTextContents();
    }
}

export default HomePage;