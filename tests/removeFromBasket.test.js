import test from "node:test";
import assert from "node:assert/strict";
import { updateBasketProduct } from "./remove.js"

test.only(("remove item from basket if quantity falls to zero", () => {
    const basket = [
        {
            name: "Pizza",
            price: 15,
            amount: 1
        }
    ];

    updateBasketProduct(basket, 0, -1);
    assert.equal(basket.length, 0);
}))