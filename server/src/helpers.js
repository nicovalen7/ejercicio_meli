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
        };
        return itemParsed;
    });
    return items;
};

export const parseItemDetails = (details) => {
    return {
        id: details.id,
        title: details.title,
        picture: details.pictures[0].url,
        price: details.price,
        condition: details.condition,
        sold_quantity: details.sold_quantity,
        category_id: details.category_id
    };
};

export const parseDescription = (descObj) => {
    return descObj.plain_text;
}

export const parseCategories = (categoryInfo) => {
    const finalCategories = [];
    for (let cat of categoryInfo.path_from_root) {
        const categoryParsed = cat.name;
        finalCategories.push(categoryParsed);
    }
    return finalCategories;
}