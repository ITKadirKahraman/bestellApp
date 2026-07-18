import test from "node:test";
import assert from "node:assert/strict";
import { updateBasketProduct } from "./remove.js"

test("remove item from basket if quantity falls to zero", () => {
    const basket = [
        {
            name: "Pizza",
            price: 15,
            amount: 1
        }
    ];

    updateBasketProduct(basket, 0, -1);
    assert.equal(basket.length, 0);
    console.log(basket);
})

test.only("decrement the value", () => {
    const basket = [
        {
            name: "Döner Pizza",
            price: 25,
            amount: 3
        }
    ];

    updateBasketProduct(basket, 0, -2);
    assert.equal(basket[0].amount, 1);
    console.log(basket);
    
})