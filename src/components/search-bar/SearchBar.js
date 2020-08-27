import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, InputBase, Container, Paper, Toolbar, AppBar, Grid, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.scss';

export default function SearchBar() {
  const [ currentQuery, setQuery ] = useState('');

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="search-bar">
      <AppBar position="static" className="root">
        <Container maxWidth="md"> 
          <Toolbar className="toolbar">
                <Grid container justify="center" >
                    <Grid item xs={1} className="logo-container">
                        <img src="/assets/Logo_ML.png" alt="logo" className="logo" />
                    </Grid>
                    <Grid item xs={11}>
                        <Paper component="form" className="input-background">
                            <InputBase
                                className="input-search"
                                placeholder="Nunca dejes de buscar"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={onChangeInput}
                            />
                            <Link underline='none' component={RouterLink} to={`/items?search=${currentQuery}`} className="search-icon-container">
                              <img src="/assets/ic_Search.png" alt="search-icon" />
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}