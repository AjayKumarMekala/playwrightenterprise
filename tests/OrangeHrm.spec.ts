import { test, expect } from '../fixtures/baseTest';

test('Login and Add Employee', async ({ loginPage, pimPage, personalDetailsPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login();
  await pimPage.addEmployee('Ajay', 'Kumar', 'M'); 
  await personalDetailsPage.verifyPersonalDetailsPage();        
});