import { test } from '@playwright/test';
test("Search on W3Schools", async({page}) => {
    // Truy cap page
    await page.goto('https://www.w3schools.com/typescript/');


    //Nhap thong tin tim kiem
    await page.fill('#tnb-google-search-input','ABC');
    
    //Click nut search
    await page.click('#tnb-google-search-icon');

    //click vào kết quả search đầu tiên và đợi 100s
    await page.locator(' .gs-title').first().click();
    await page.waitForTimeout(100000);
});