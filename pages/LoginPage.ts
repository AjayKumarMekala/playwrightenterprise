import{Page,Locator} from '@playwright/test';
import { envdetails } from '../fixtures/baseTest';

export class LoginPage{
    private readonly page:Page; 
    private readonly UserNameInput:Locator;
    private readonly PasswordInput:Locator;
    private readonly LoginButton:Locator;   
    constructor(page:Page){
        this.page=page;
        this.UserNameInput=page.getByRole('textbox', { name: 'Username' });
        this.PasswordInput=page.getByRole('textbox', { name: 'Password' });
        this.LoginButton=page.getByRole('button', { name: 'Login' });
    }

    async navigateToLoginPage(){
        await this.page.goto(envdetails.BASE_URL);
    }
    async login(){
        await this.UserNameInput.fill(process.env.ADMIN_USERNAME!||"NOT_FOUND" );
        await this.PasswordInput.fill(process.env.ADMIN_PASSWORD!||"NOT_FOUND");
        await this.LoginButton.click();
    }
}