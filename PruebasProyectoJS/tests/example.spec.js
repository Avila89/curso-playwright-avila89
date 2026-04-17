import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/');
  await page.getByRole('link', { name: 'Search Pens' }).click();
  await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/l96bj/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
  await page.goto('https://codepen.io/search/pens?q=');
  await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/dlbu9/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
  await page.goto('https://codepen.io/');
  await page.getByRole('banner').getByRole('link', { name: 'Challenges' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Pricing' }).click();
});
