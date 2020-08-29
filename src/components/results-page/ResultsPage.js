import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Container, Card, CardActionArea, Link } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import GlobalConstants from '../../constants/constants';
import { searchItems } from '../../services/services';
import './ResultsPage.scss';

export default function ResultsPage({ location }) {
    let [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const query = location.search.substring(8);

    useEffect(() => {
        setLoading(true);
        searchItems(query)
            .then(response => {
                return response.json();
            })
            .then(items => {
                setItems(items);
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [query]);

    const Loader = () => {
        return(
            <div className="item-container">
                {
                    Array.from(new Array(4)).map((item, i) => (
                        <div key={i}>
                            <Card variant="outlined" className="item-card">
                                    <Grid container>
                                        <Grid item xs={3} className="item-image-container">
                                            <Skeleton animation="pulse" variant="circle" className="item-card-image-loader" />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <div className="item-price-text">
                                                <Skeleton animation="pulse" height={40} style={{ marginBottom: 20 }} width="20%" />
                                                <Skeleton animation="pulse" height={40} width="50%" />
                                            </div>
                                        </Grid>
                                    </Grid>
                            </Card>
                            <div className="card-border-container">
                                <div className="card-item-border"></div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        )
    };

    const ItemCard = ({item, isLast}) => (
        <Link underline='none' component={RouterLink} to={`${GlobalConstants.routes.itemsRoute}/${item.id}`} className="item-container">
            <Card variant="outlined" className="item-card">
                <CardActionArea className="clickable-section">
                    <Grid container>
                        <Grid item xs={3} className="item-image-container">
                            <img className="item-card-image" src={item.picture} alt="product-image" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className="item-price-text">
                                $ {item.price}
                                { item.free_shipping ? 
                                    <img className="item-shippable-icon" src={`${GlobalConstants.paths.assets}/ic_shipping.png`} alt="product-image" />
                                    : null
                                }
                            </div>
                            <div className="item-name-text">
                                {item.title}
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="item-city-text">
                                {item.state}
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
                            isLoading ?
                            <Loader />
                            : items.map((item, index) => <ItemCard item={item} isLast={index === items.length - 1} key={item.id} />)
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}