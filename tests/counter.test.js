import test from "node:test";
import assert from "node:assert/strict";
import { updateBasketAmount } from "./counter.js"

test(("erhöht die Menge eines Produkts"), () => {
    const basket = [
        {
            name: "Pizza",
            price: 10,
            amount: 1
        }
    ];

    updateBasketAmount(basket, 0, 2);
    assert.equal(basket[0].amount, 3);
    console.log(basket)
})

test(("verringert die Menge"), () => {
    const basket = [
        {
            name: "Pizza",
            price: 10,
            amount: 3
        }
    ];

    updateBasketAmount(basket, 0, -2);
    assert.equal(basket[0].amount, 1);
    console.log(basket)
})

test.only(("entfernt produkt bei Menge 0"), () => {
    const basket = [
        {
            name: "Pizza",
            price: 10,
            amount: 1
        }
    ];

    updateBasketAmount(basket, 0, -1);
    assert.equal(basket.length,0, 0);
    console.log(basket)
})