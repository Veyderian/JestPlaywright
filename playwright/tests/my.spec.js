//const user = require('./user');
const user = require("../user");
const { test, expect } = require('@playwright/test');



test.only("test2", async ({ page }) => { // успешный вход в личный кабинет
    // Go to https://netology.ru/?modal=sign_in#/
    await page.goto('https://netology.ru/?modal=sign_in'); 
    //await page.pause();
    //await page.locator('[placeholder="Email"]').fill(user.email);
    await page.getByPlaceholder("Email").fill(user.email);
    await page.locator('[placeholder="Пароль"]').fill(user.password);
    await page.waitForSelector('text=Войти', {timeout: 5000});
    await page.locator('text=Войти').click();
    await page.locator('text=Привет, Ольга! Вы вошли в аккаунт').isVisible();
    await page.screenshot({path:'screenshot.png', fullPage: true});
    await expect(page).toHaveURL("");
     
  });
    
    test("test3", async ({ page }) => { // неправильный логин или пароль
      // Go to https://netology.ru/?modal=sign_in#/
      await page.goto('https://netology.ru/?modal=sign_in');
      await page.pause();
      await page.locator('[placeholder="Email"]').fill('wrongemail@gmail.com');
      await page.locator('[placeholder="Пароль"]').fill('password');
      const button = ('data-testid=login-submit-btn');
      await page.locator(button).isVisible();
      await page.locator(button).click();
      const errorHint = await page.textContent(
        '[data-testid="login-error-hint"]'
      );
      await expect(errorHint).toContain("Вы ввели неправильно логин или пароль");
    });
         


      

   