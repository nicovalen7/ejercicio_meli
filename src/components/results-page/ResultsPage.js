import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Container, Card, CardContent, CardActionArea, Link } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import GlobalConstants from '../../constants/constants';
import './ResultsPage.scss';

export default function ResultsPage({ location }) {

    useEffect(() => {
        const query = location.search.substring(8);
    }, []);

    const mockedProducts = [
        {
            id: 1,
            price: '$1980',
            name: 'Apple IPhone X 256GB',
            city: 'Córdoba',
            picture: 'iphone-x.jpg',
            condition: 'Nuevo - 234 vendidos',
            description: 'IPhone X nuevo de 256GB año 2020 oferta',
            shippable: true
        },
        {
            id: 2,
            price: '$1980',
            name: 'Apple IPhone X 256GB',
            city: 'Córdoba',
            picture: 'iphone-x.jpg',
            condition: 'Nuevo - 234 vendidos',
            description: 'IPhone X nuevo de 256GB año 2020 oferta',
            shippable: false
        },
        {
            id: 3,
            price: '$1980',
            name: 'Apple IPhone X 256GB',
            city: 'Córdoba',
            picture: 'iphone-x.jpg',
            condition: 'Nuevo - 234 vendidos',
            description: 'IPhone X nuevo de 256GB año 2020 oferta',
            shippable: true
        },
        {
            id: 4,
            price: '$1980',
            name: 'Apple IPhone X 256GB',
            city: 'Córdoba',
            picture: 'iphone-x.jpg',
            condition: 'Nuevo - 234 vendidos',
            description: 'IPhone X nuevo de 256GB año 2020 oferta',
            shippable: false
        }
    ]

    const Loader = () => {
        return(
            <React.Fragment>
                {
                    Array.from(new Array(4)).map(() => (
                        <Card variant="outlined" className="item-card">
                            <CardActionArea>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <Skeleton animation="wave" variant="circle" className="item-card-image-loader" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <CardContent>
                                            <React.Fragment>
                                                <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} width="20%" />
                                                <Skeleton animation="wave" height={40} width="50%" />
                                            </React.Fragment>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    ))
                }
                
            </React.Fragment>
        )
    };

    const ItemCard = ({item, isLast}) => (
        <Link underline='none' component={RouterLink} to={`${GlobalConstants.routes.itemsRoute}/${item.id}`} className="item-container">
            <Card variant="outlined" className="item-card">
                <CardActionArea className="clickable-section">
                    <Grid container>
                        <Grid item xs={3} className="item-image-container">
                            <img className="item-card-image" src={`/assets/${item.picture}`} alt="product-image" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="item-price-text">
                                {item.price}
                                { item.shippable ? 
                                    <img className="item-shippable-icon" src={`${GlobalConstants.paths.assets}/ic_shipping.png`} alt="product-image" />
                                    : null
                                }
                            </div>
                            <div className="item-name-text">
                                {item.name}
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="item-city-text">
                                {item.city}
                            </div>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
            { !isLast ?
                <div className="card-border-container">
                    <div className="card-item-border"></div>
                </div>
                : null
            }
        </Link>
    )

    return (
        <Container maxWidth="lg" className="results-container">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Breadcrumbs />
                    <div className="products-container">
                        {
                            mockedProducts.map((item, index) => <ItemCard item={item} isLast={index === mockedProducts.length - 1} key={item.id} />)
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}