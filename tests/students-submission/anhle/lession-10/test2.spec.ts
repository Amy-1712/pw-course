import { test } from '@playwright/test';
import { ProductPage } from './refactor/Page/ProductPage';

//a.thêm sp vào giỏ hàng
test('AddCart', async ({ page }) => {
    const AddCart = new ProductPage(page);
    const quantitySP1 = 2;
    const quantitySP2 = 3;
    const quantitySP3 = 1;

    const priceSP1 = 10;
    const priceSP2 = 20;
    const priceSP3 = 30;


    await AddCart.navigate();
    await AddCart.clickToProductPage();
    await AddCart.addProduct(quantitySP1,quantitySP2,quantitySP3);
    await AddCart.checkSoLuongSP(quantitySP1,quantitySP2,quantitySP3);

});