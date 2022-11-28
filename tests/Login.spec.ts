import { test, expect, type Page } from '@playwright/test';


test.beforeEach( async ({ page }) => {
  await page.goto('EnvronmentURL');
  // create a locator
  await page.click("input[name=username]", {clickCount: 3})
  const username = page.getByLabel("Email address").fill("username")
  await page.click("input[name=password]", {clickCount: 3})
  const pass = page.getByLabel("Password").fill("pass")
  const getStarted = page.getByRole('button', { name: 'Continue' })
  await getStarted.click()
  // Expect a title "to contain" a substring.
  await expect (page).toHaveTitle("CData Connect Cloud")
  //await page.screenshot({path: 'D:\PlayWright\tests\screenshot.png'});
});

test('Add Connection',async ({page}) => {
  await page.getByText('Connections').click()
  await page.getByRole('button', { name: /Add Connection/i }).click()
  await page.getByPlaceholder('Search by name...').fill('Salesforce')
 // await page.locator('text="Salesforce"').click();
  //await page.locator('addConnectionRow-Salesforce').click();
  await page.locator('//body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]').click
  // await page.screenshot({path: 'screenshot.png'});
})
