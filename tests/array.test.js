import test from "node:test";
import assert from "node:assert/strict"
import { testArray } from "./array.js"

test.only(("check object"), () => {
    const array = [
        {
            image: "blackbox to whitebox",
            name: "Diziplien",
            price: '19.90',
            description: "find your way to success",
            added: false
        }
    ]

    assert.deepStrictEqual(testArray(array), [{image: "blackbox to whitebox", name: "Diziplien", price: '19.90', description: "find your way to success", added: false}]);
})