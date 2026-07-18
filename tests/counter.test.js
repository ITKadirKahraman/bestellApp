import test from "node:test";
import assert from "node:assert/strict";
import { counterTesting } from "./counter.js"

test.only(("erhöht die Menge eines Produkts"), () => {
    const basket = [
        {
            name: "Pizza",
            price: 10,
            amount: 1
        }
    ];

    counterTesting(basket, 0, 2);
    assert.equal(basket[0].amount, 3);
})