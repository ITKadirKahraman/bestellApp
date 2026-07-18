import test from "node:test";
import assert from "node:assert/strict";
import { pushToBasket } from "./pushToBasket.js";

test(("add products to basket"), () => {
    const basket = [];

    const product = {
        name: "Pizza Döner with Hollandiase",
        price: 13.50,
        amount: 1
    };

    pushToBasket(basket, product);

    assert.deepStrictEqual(basket, [{name: "Pizza Döner with Hollandiase", price: 13.50, amount: 1}]);
    console.log(basket);
    
})

test.only(("same product increases the quantity"), () => {
    const basket = [
        {
            name: "Pizza Döner with Hollandiase",
            price: 13.50,
            amount: 1
        }
    ];

    pushToBasket(basket, {
        name: "Pizza Döner with Hollandiase",
        price: 13.50
    });

    assert.equal(basket.length, 1);
    assert.equal(basket[0].amount, 2);
    console.log(basket);
})