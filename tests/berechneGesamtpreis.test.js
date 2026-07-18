import test from "node:test";
import assert from "node:assert/strict";
import { berechneGesamtpreis } from "./berechneGesamtpreis.js"

test(("calculate the price from order"), () => {
    const warenkorb = [
        {name: "Pizza", price: 14.99, amount: 1},
        {name: "Coffee", price: 4.99, amount: 1},
    ]
    assert.equal(berechneGesamtpreis(warenkorb), 19.98);
    console.log(berechneGesamtpreis(warenkorb));
})

test(("product amount"), () => {
    const warenkorb = [
        {name: "Döner", price: 8, amount: 4}
    ]
    assert.equal(berechneGesamtpreis(warenkorb), 32);
    console.log(berechneGesamtpreis(warenkorb));
})

test("beruecksichtigt die Menge (3x der gleiche Artikel)", () => {
    const warenkorb = [
    { name: "Döner", price: 20, amount: 3},
  ];
  assert.equal(berechneGesamtpreis(warenkorb), 60);
  console.log(berechneGesamtpreis(warenkorb));
});

test.only("empty basket is zero", () => {
  assert.equal(berechneGesamtpreis([]), 0);
  console.log(berechneGesamtpreis([]));
});