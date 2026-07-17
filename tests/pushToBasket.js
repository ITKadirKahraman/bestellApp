export function pushToBasket(product) {
    return basket.push(
        {
            name: product.name,
            price: product.price,
            amount: product.amount
        }
    );
}