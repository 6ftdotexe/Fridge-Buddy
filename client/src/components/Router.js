import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import Recipe from './Recipe';
import FaveCard from "./FaveCard";
import AboutCard from "./AboutCard";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route exact path="/Favorites">
                <FaveCard />
            </Route>
            <Route exact path="/About">
                <AboutCard />
            </Route>
            <Route exact path="/Inventory">
                <FaveCard />
            </Route>
            <Route path="/recipe/:name" component={Recipe} />
        </Switch>
    </BrowserRouter>

)
export default Router;