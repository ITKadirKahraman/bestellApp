import test from "node:test";
import assert from "node:assert/strict";
import { pushToBasket } from "./pushToBasket.js";

test.only(("add products to basket"), () => {
    const basket = [];

    const product = {
        name: "Pizza Döner with Hollandiase",
        price: 13.50,
        amount: 1
    };

    pushToBasket(basket, product);

    assert.deepStrictEqual(basket, [{name: "Pizza Döner with Hollandiase", price: 13.50, amount: 1}]);
})