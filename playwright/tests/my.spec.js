
const { email, password } = require("../user.js")

const { test, expect } = require('@playwright/test');



test("test2", async ({ page }) => { // успешный вход в личный кабинет
    // Go to https://netology.ru/?modal=sign_in#/
    await page.goto('https://netology.ru/?modal=sign_in'); 
    await page.locator('[placeholder="Email"]').fill(email);
    await page.locator('[placeholder="Пароль"]').fill(password);
    await page.locator('[data-testid="login-submit-btn"]').click();
    await page.locator('text=Привет, Ольга! Вы вошли в аккаунт', {timeout: 5000}).isVisible();
    await page.screenshot({path:'screenshot.png', fullPage: true});
    await expect(page).toHaveURL("https://netology.ru/profile/8497043");
     
  });
    
    test("test3", async ({ page }) => { // неправильный логин 
      // Go to https://netology.ru/?modal=sign_in#/
      await page.goto('https://netology.ru/?modal=sign_in');
      //await page.pause();
      await page.locator('[placeholder="Email"]').fill('wrongemail@gmail.com');
      await page.locator('[placeholder="Пароль"]').fill(password);
      const button = ('data-testid=login-submit-btn');
      await page.locator(button).isVisible();
      await page.locator(button).click();
      const errorHint = await page.textContent(
        '[data-testid="login-error-hint"]'
      );
      await expect(errorHint).toContain("Вы ввели неправильно логин или пароль");
    });

    test("test4", async ({ page }) => { // неправильный пароль 
      // Go to https://netology.ru/?modal=sign_in#/
      await page.goto('https://netology.ru/?modal=sign_in');
      //await page.pause();
      await page.locator('[placeholder="Email"]').fill(email);
      await page.locator('[placeholder="Пароль"]').fill('password');
      const button = ('data-testid=login-submit-btn');
      await page.locator(button).isVisible();
      await page.locator(button).click();
      const errorHint = await page.textContent(
        '[data-testid="login-error-hint"]'
      );
      await expect(errorHint).toContain("Вы ввели неправильно логин или пароль");
    });
        
  

    test("test5", async ({ page }) => { // поле "логин" пустое 
      // Go to https://netology.ru/?modal=sign_in#/
      await page.goto('https://netology.ru/?modal=sign_in');
      await page.locator('[placeholder="Пароль"]').fill('password');
      const button = ('data-testid=login-submit-btn');
      await page.locator(button).isVisible();
      await page.locator(button).click();
      //await page.pause();
      await page.locator('text="Обязательное поле').isVisible();
      
    });

  
         


      

   