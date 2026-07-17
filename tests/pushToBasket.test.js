import test from "node:test";
import assert from "node:assert/strict";
import { pushToBasket } from "./pushToBasket";

test.only(("add products to basket"), () => {
    product.push ( 
        {
            name: "Pizza Döner with Hollandiase",
            price: "13.50",
            amount: 1
        }
    )
    assert.deepStrictEqual(pushToBasket(product), {name: "Pizza Döner with Hollandiase", price: "13.50", amount: 1});
})