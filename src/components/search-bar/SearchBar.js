import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { InputBase, Container, Paper, Toolbar, AppBar, Grid, Link } from '@material-ui/core';
import GlobalConstants from '../../constants/constants';
import './SearchBar.scss';

export default function SearchBar() {
  const [ currentQuery, setQuery ] = useState('');
  const history = useHistory();

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (currentQuery !== '') {
        history.push(`${GlobalConstants.routes.searchRoute}=${currentQuery}`);
      }
    }
  }

  return (
    <div className="search-bar">
      <AppBar position="static" className="root">
        <Container maxWidth="lg"> 
          <Toolbar className="toolbar">
                <Grid container justify="center" >
                    <Grid item xs={1} className="logo-container">
                        <img src={`${GlobalConstants.paths.assets}/Logo_ML.png`} alt="logo" className="logo" />
                    </Grid>
                    <Grid item xs={11}>
                        <Paper className="input-background">
                            <InputBase
                                className="input-search"
                                placeholder="Nunca dejes de buscar"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={onChangeInput}
                                onKeyDown={handleKeyDown}
                            />
                            <Link underline='none' component={RouterLink} to={`${GlobalConstants.routes.searchRoute}=${currentQuery}`} className="search-icon-container">
                              <img src={`${GlobalConstants.paths.assets}/ic_Search.png`} alt="search-icon" />
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