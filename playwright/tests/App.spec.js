const { test, expect } = require("@playwright/test");


 test.skip("test", async ({ page }) => {

//     // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/");

//   // Click a
  await page.click("a");
  //await page.pause();
  await expect(page).toHaveURL("https://netology.ru/");
 
  
//   // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");
//   //await page.pause();
  await Promise.all([
    page.waitForNavigation({ url: 'https://netology.ru/free/management#/nachat_uchitsya' }),
    page.click(':nth-match(:text("Бизнес и управление"), 2)')
  ]);
//   // Click text=Проджект-менеджер: старт в профессии
  await page.click('text=Проджект-менеджер: старт в профессии');
  //await page.screenshot({path:'screenshot.png', fullPage: true, timeout: 50000});
  await expect(page).toHaveURL('https://netology.ru/programs/project-manager-free', {timeout: 50000});
  await page.screenshot({path:'screenshot.png', fullPage: true, timeout: 50000});
 
});

// test.only("test2", async ({ page }) => { // мой первый тест
//   // Go to https://netology.ru/?modal=sign_in#/
//   await page.goto('https://netology.ru/?modal=sign_in');  //await page.pause();
//   await page.locator('[placeholder="Email"]').fill(user.email);
//   await page.locator('[placeholder="Пароль"]').fill(user.password());
//   await page.waitForSelector('text=Войти', {timeout: 5000});
//   await page.locator('text=Войти').click();

 
//   await page.locator('text=Привет, Ольга! Вы вошли в аккаунт').isVisible();
//   await page.screenshot({path:'screenshot.png', fullPage: true});
// await expect(page).toHaveURL("");
   
// });
  
  // test("test3", async ({ page }) => { // неправильный логин или пароль
  //   // Go to https://netology.ru/?modal=sign_in#/
  //   await page.goto('https://netology.ru/?modal=sign_in');
  //   //await page.pause();
  //   await page.locator('[placeholder="Email"]').fill('wrongemail@gmail.com');
  //   await page.locator('[placeholder="Пароль"]').fill('password');
  //   await page.locator('data-testid=login-submit-btn').click();
  //   //await page.locator('text=Войти').click();

  //   await page.locator(text="Вы ввели неправильно логин или пароль");
  //   await page.pause();


  
//     await page.waitForSelector('', {timeout: 5000});
//     await page.locator('text=').isVisible();
//     await page.locator('[placeholder="Пароль"]').fill(user.password


// });
 