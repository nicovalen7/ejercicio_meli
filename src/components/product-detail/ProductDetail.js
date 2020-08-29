import React, { useEffect, useState } from 'react';
import { Grid, Container, Card } from '@material-ui/core';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Skeleton from '@material-ui/lab/Skeleton';
import { getItemDetails } from '../../services/services';
import './ProductDetail.scss';

export default function ProductDetail({ match }) {
    const selectedId = match.params.id;
    let [isLoading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const [categoriesBreadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        setLoading(true);
        getItemDetails(selectedId)
            .then(response => {
                return response.json();
            })
            .then(details => {
                setItem(details);
                setBreadcrumbs(details.categories);
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [selectedId]);

    const parseCondition = (condition) => {
        switch(condition) {
            case 'new':
                return 'Nuevo';
            case 'used':
                return 'Usado';
            default:
                return 'Condicion no traducida';
        }
    }

    const Loader = () => {
        return(
            <Card variant="outlined" className="product-detail">
                    <Grid container>
                        <Grid item xs={7} className="product-image-container">
                            <Skeleton animation="pulse" variant="circle" className="product-detail-image-loader" />
                        </Grid>
                        <Grid item xs={5}>
                            <React.Fragment>
                                <Skeleton animation="pulse" height={80} width="40%" />
                                <Skeleton animation="pulse" height={80} style={{ marginBottom: 20 }} width="100%" />
                                <Skeleton animation="pulse" height={80} width="50%" />
                            </React.Fragment>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="product-detail-description">
                                <Skeleton animation="pulse" height={80} width="40%" />
                                <Skeleton animation="pulse" height={200} width="100%" />
                            </div>
                        </Grid>
                    </Grid>
            </Card>
        )
    };

    const DetailCard = ({item}) => (
        <Card variant="outlined" className="product-detail">
            <Grid container>
                <Grid item xs={7} className="product-image-container">
                    <img className="product-detail-image" alt="product-img" src={item.picture} />
                </Grid>
                <Grid item xs={5} className="product-detail-general-info">
                    <div className="product-detail-condition">
                        {parseCondition(item.condition)} - {item.sold_quantity} vendidos
                    </div>
                    <div className="product-detail-name">
                        <b>{item.title}</b>
                    </div>
                    <div className="product-detail-price">
                        $ {item.price}
                    </div>
                    <div className="buy-button-container">
                        <button className="buy-product-button">
                            Comprar
                        </button>
                    </div>
                </Grid>
                <Grid item xs={8} className="product-detail-description">
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
                    <Breadcrumbs categories={categoriesBreadcrumbs}/>
                    {
                        isLoading ?
                            <Loader />
                            : <DetailCard item={item} />
                    }
                </Grid>
            </Grid>
        </Container>
    );
}