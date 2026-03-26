import { test, expect } from "@playwright/test";
test.describe("Bai tap thuc hang nang cao 4: login & logout", () => {
  test("login-logout", async ({ page }) => {
    // Login
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    //check after login
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const title = page.locator(".title");
    await expect(title).toHaveText("Products");
    await expect(title).toBeVisible();
    // open menu
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    //check logout successful
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});
