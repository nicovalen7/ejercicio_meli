import React from 'react';
import { Card, CardContent, Grid, Container, Typography } from '@material-ui/core';
import './HomePage.scss'

export default function HomePage() {
    return (
      <Container maxWidth="md" className="homepage-container">
          <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" component="h3" align="center">
                      ¡Bienvenido!  
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
      </Container>
    );
}