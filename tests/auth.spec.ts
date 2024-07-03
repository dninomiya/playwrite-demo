import { test, expect } from '@playwright/test';

const local = 'http://localhost:3000/';
const staging =
  'https://playwrite-demo-git-develop-daichi-ninomiyas-projects.vercel.app/';
const url = process.env.CI ? staging : local;

test('ログインできること', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログイン' }).click();

  await expect(page.getByRole('heading', { name: 'ようこそ' })).toBeVisible();
});

test('ログアウトできること', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログアウト' }).click();

  await expect(page.getByRole('button', { name: 'ログイン' })).toBeVisible();
});
