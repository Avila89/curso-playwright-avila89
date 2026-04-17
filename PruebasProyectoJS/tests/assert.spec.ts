import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://uitestingplayground.com/textinput');

  //asegurarme que el input está visible
  await expect(page.locator('#newButtonName')).toBeVisible();
  //seleccionar el input e introducir texto
  await page.locator('#newButtonName').fill('pulsar');
  await page.pause();
  //hacer click en botón
  await page.locator('#updatingButton').click();
  //verificar que el botón ha cambiado
  await expect(page.locator('#updatingButton')).toContainText('pulsar');
});
