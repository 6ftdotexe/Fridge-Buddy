import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import Recipe from './Recipe';
import About from '../pages/About';
import Favorites from '../pages/Favorites';
import Inventory from '../pages/Inventory';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route exact path="/About" component={About} />
            <Route exact path="/About" component={Favorites} />
            <Route exact path="/About" component={Inventory} />
            <Route path="/recipe/:name" component={Recipe} />
        </Switch>
    </BrowserRouter>

)
export default Router;