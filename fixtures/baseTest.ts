import{test as base} from '@playwright/test';
import dotenv from 'dotenv';
import envconfig from '../config/envconfig.json';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { PersonalDetailsPage } from '../pages/PersonalDetailsPage';

dotenv.config();
const env=(process.env.ENV||'DEV') as 'DEV'|'QA'|'PROD';
export const envdetails=envconfig[env];

type MyFixtures={
    loginPage:LoginPage;
    pimPage:PIMPage;
    personalDetailsPage:PersonalDetailsPage;
}
export const test=base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    pimPage:async({page},use)=>{
        const pimPage=new PIMPage(page);
        await use(pimPage);
    },
    personalDetailsPage:async({page},use)=>{
        const personalDetailsPage=new PersonalDetailsPage(page);
        await use(personalDetailsPage);
    }
})
export const expect=test.expect;