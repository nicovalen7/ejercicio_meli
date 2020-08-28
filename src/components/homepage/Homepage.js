import React from 'react';
import { Card, Grid, Container } from '@material-ui/core';
import './HomePage.scss'

export default function HomePage() {
    return (
      <Container maxWidth="lg" className="homepage-container">
          <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={12}>
                <Card variant="outlined">
                  <div className="homepage-text">
                    ¡Bienvenido!  
                  </div>
                </Card>
              </Grid>
          </Grid>
      </Container>
    );
}