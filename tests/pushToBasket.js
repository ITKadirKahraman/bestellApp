export function pushToBasket(basket, product) {
    basket.push(
        {
            name: product.name,
            price: product.price,
            amount: product.amount
        }
    );

    return basket;
}