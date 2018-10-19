import React from 'react';
import { Route } from "react-router-dom";
import * as Screens from '../screens';

const Routes = () => (
    <div>
        <Route exact path="/" component={Screens.Home} />
        <Route exact path="/lesson/:id" component={Screens.Lesson} />
    </div>
);

export default Routes;