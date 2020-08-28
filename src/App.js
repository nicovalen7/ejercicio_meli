import React from 'react';
import { hot }  from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './components/homepage/HomePage';
import SearchBar from './components/search-bar/SearchBar';
import ResultsPage from './components/results-page/ResultsPage';
import ProductDetail from './components/product-detail/ProductDetail';

import './App.scss';

const App = () => (
    <BrowserRouter>
        <CssBaseline />
        <SearchBar />
        <div className="app-container">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/items' component={ResultsPage} />
                <Route exact path='/items/:id' component={ProductDetail} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default hot(module)(App);