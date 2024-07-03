import { test, expect } from '@playwright/test';

test('ログインできること', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログイン' }).click();

  await expect(page.getByRole('heading', { name: 'ようこそ' })).toBeVisible();
});

test('ログアウトできること', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'ログアウト' }).click();

  await expect(page.getByRole('button', { name: 'ログイン' })).toBeVisible();
});
