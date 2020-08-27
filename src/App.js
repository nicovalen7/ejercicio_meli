import React from 'react';
import { hot }  from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './components/homepage/HomePage';
import SearchBar from './components/search-bar/SearchBar';

import './App.scss';

const App = () => (
    <BrowserRouter>
        <CssBaseline />
        <SearchBar />
        <div className="app-container">
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default hot(module)(App);