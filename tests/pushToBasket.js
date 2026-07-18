export function pushToBasket(basket, product) {
    const existingProduct = basket.find(
        item => item.name === product.name
    );

    if(existingProduct) {
        existingProduct.amount++;
    } else {
        basket.push(
            {
                name: product.name,
                price: product.price,
                amount: 1
            }
        );
    }

    return basket;
}