import{Page,Locator,expect} from '@playwright/test';

export class PersonalDetailsPage{
    private readonly page:Page;
    private readonly PersonalDetailsHeaderTxt:Locator;
    private readonly ClickOnUserProfile:Locator;
    private readonly LogoutButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.PersonalDetailsHeaderTxt=page.locator("//label[text()='Employee Full Name']");
        this.ClickOnUserProfile=page.locator('//p[@class="oxd-userdropdown-name"]');       
        this.LogoutButton=page.locator("//a[text()='Logout']");
    }
    async verifyPersonalDetailsPage(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.PersonalDetailsHeaderTxt).toBeVisible();
        await this.ClickOnUserProfile.click();
        await this.LogoutButton.waitFor({state:'visible',timeout:9000});
        await this.LogoutButton.click();
    }
}