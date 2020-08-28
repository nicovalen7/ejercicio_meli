export const parseSearchResult = (result) => {
    const items = result.results.slice(0, 4).map(item => {
        const itemParsed = {
            id: item.id,
            title: item.title,
            picture: item.thumbnail,
            price: item.price,
            free_shipping: item.shipping.free_shipping,
            state: item.seller_address.state.name,
            condition: item.condition
        }
        return itemParsed;
    });
    return items;
}