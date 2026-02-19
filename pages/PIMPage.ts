import{Page,Locator, expect} from '@playwright/test';

export class PIMPage{
    private readonly page:Page;
    private readonly PIMHeaderTxt:Locator;
    private readonly FirstNameInput:Locator;
    private readonly MiddleNameInput:Locator;
    private readonly LastNameInput:Locator;
    private readonly SaveButton:Locator;  
    private readonly AddEmployee:Locator;  
    private readonly EmployeeId:Locator;    
    private readonly SuccessMsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.PIMHeaderTxt=page.locator("//span[text()='PIM']");
        this.FirstNameInput=page.getByRole('textbox', { name: 'First Name' });
        this.MiddleNameInput=page.getByRole('textbox', { name: 'Middle Name' });
        this.LastNameInput=page.getByRole('textbox', { name: 'Last Name' });
        this.EmployeeId=page.locator("//label[text()='Employee Id']//following::input[@class='oxd-input oxd-input--active']");
        this.SaveButton=page.getByRole('button', { name: 'Save' });
        this.AddEmployee=page.getByRole('link', { name: 'Add Employee' });
        this.SuccessMsg=page.locator("//p[@class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']");
    }
    async addEmployee(firstName:string,middleName:string,lastName:string){
        await this.PIMHeaderTxt.waitFor({state:'visible'});
        await this.PIMHeaderTxt.click();
        await this.AddEmployee.waitFor({state:'visible'});
        await this.AddEmployee.click();
        await this.FirstNameInput.waitFor({state:'visible'});  
        await this.FirstNameInput.fill(firstName);
        await this.MiddleNameInput.fill(middleName);
        await this.LastNameInput.fill(lastName);
       // await this.EmployeeId.waitFor({state:'visible'});   
       // await this.EmployeeId.fill('1234@@');
        await this.SaveButton.click();
        await this.SuccessMsg.waitFor({state:'visible'});
        let successMessage = await this.SuccessMsg.textContent();
        expect(successMessage).toContain('Successfully Saved');
    }
}