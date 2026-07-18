export function updateBasketAmount(basket, index, value) {
    basket[index].amount += value;

    if (basket[index].amount <= 0) {
        basket.splice(index, 1);
    }

    return basket;
}