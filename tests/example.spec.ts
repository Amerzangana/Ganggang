import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await expect(page.getByRole('heading', { name: 'Boxing Center' })).toBeVisible();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'About Class' })).toBeVisible();
  await page.getByRole('link', { name: 'Classes' }).click();
  await expect(page.getByRole('heading', { name: 'Our Classes Videos' })).toBeVisible();
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Latest Blog' })).toBeVisible();
});




test('test one', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByText('iusmod tempor incididunt ut').first()).toBeVisible();
  await page.getByRole('link', { name: 'Classes' }).click();
  await expect(page.getByText('iusmod tempor incididunt ut')).toBeVisible();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('heading', { name: 'Boxing Center' }).click();
  await page.getByRole('heading', { name: 'Boxing Center' }).click();
  await expect(page.getByRole('heading', { name: 'Boxing Center' })).toBeVisible();
});