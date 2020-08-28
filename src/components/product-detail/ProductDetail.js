import React, { useEffect } from 'react';
import { Grid, Container, Card, CardContent } from '@material-ui/core';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import './ProductDetail.scss';

export default function ProductDetail({ match }) {

    useEffect(() => {
        const selectedId = match.params.id;
    }, []);

    const item = {
        price: '$1980',
        name: 'Apple IPhone X 256GB',
        city: 'Córdoba',
        picture: 'iphone-x.jpg',
        condition: 'Nuevo - 234 vendidos',
        description: 'IPhone X nuevo de 256GB año 2020 oferta'
    };

    const DetailCard = ({item}) => (
        <Card variant="outlined" className="product-detail">
            <Grid container>
                <Grid item xs={7} className="product-image-container">
                    <img className="product-detail-image" alt="product-img" src={`/assets/${item.picture}`} />
                </Grid>
                <Grid item xs={5} className="product-detail-general-info">
                    <div className="product-detail-condition">
                        {item.condition}
                    </div>
                    <div className="product-detail-name">
                        <b>{item.name}</b>
                    </div>
                    <div className="product-detail-price">
                        {item.price}
                    </div>
                    <div className="buy-button-container">
                        <button className="buy-product-button">
                            Comprar
                        </button>
                    </div>
                </Grid>
            </Grid>
            <Grid container className="product-detail-description">
                <Grid item xs={8}>
                    <div className="product-description-title">
                        Descripción del producto
                    </div>
                    <div className="product-description-text">
                        {item.description}
                    </div>
                </Grid>
            </Grid>
        </Card>
    )

    return (
        <Container maxWidth="lg" className="product-container">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Breadcrumbs />
                    <DetailCard item={item} />
                </Grid>
            </Grid>
        </Container>
    );
}