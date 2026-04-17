import { test, expect } from '@playwright/test';

test('añadir producto al carrito', async ({ page }) => {

  //abrir en el navegador la tienda virtual/
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();

  //Deslizar hasta ver los productos/
  await expect(page.getByRole('heading', { name: 'features items'})).toBeVisible();

  //Hacer click en "View Product" del primer producto/
  await page.getByRole('link', { name: 'View Product'}).first().click();
  await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();

  //Añadir 3 productos al carrito/
  await page.locator('#quantity').fill('');
  await page.locator('#quantity').fill('3');

  //Hacer click en añadir al carrito/
  await page.getByRole("button",{name: 'Add to cart'}).click();

  //Verificar que aparece el modal y el texto de "Added!"/
  await expect(page.getByRole('heading', {name: 'Added!'})).toBeVisible();

  //Hacer click en el botón "Continue Shopping"/
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  //Verificar que el modal ya no es visible/
  await expect(page.getByRole('heading', {name: 'Added!'})).not.toBeVisible();

});
