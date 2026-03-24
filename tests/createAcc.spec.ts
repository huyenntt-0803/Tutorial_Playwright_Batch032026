import {test, expect} from '@playwright/test';

test("Create acc",async({page})=>{
    // Go to page 
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // Fill data
    await page.fill('#username','Thanh Huyen');
    await page.fill('#email','huyen@gmail.com');
    await page.locator('input[type="radio"][value="female"]').check();
    await page.locator('input[type="checkbox"][value="reading"]').check();
    await page.selectOption('#country','Canada');
    await page.selectOption('#interests',['Art', 'Music']);
    await page.fill('#dob', '1994-11-14'); 

    // Check radio 
    await expect(page.locator('input[value="female"]')).toBeChecked();
    await expect(page.locator('input[value="reading"]')).toBeChecked();

    // Click button 
    await page.click('button[type="submit"]'); 
    await expect(page.locator('//table[@id="userTable"]')).toContainText('Thanh Huyen');
    await page.waitForTimeout(10000);

})