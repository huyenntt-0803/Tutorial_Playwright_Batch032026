import { test, expect } from "@playwright/test";
test.describe("Bai tap thuc hang nang cao 3: Kiem tra trang thai gio hang", () => {
  test("add item", async ({ page }) => {
    // login
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    //check after login
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const title = page.locator('[data-test="title"]');
    await expect(title).toHaveText("Products");
    await expect(title).toBeVisible();

    // find cart page
    const cartBadge = page.locator(".shopping_cart_badge");

    // add item 1 & check cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(cartBadge).toHaveText("1");

    // add item 2 & check cart
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(cartBadge).toHaveText("2");
  });
});
