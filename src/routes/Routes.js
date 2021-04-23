import React from 'react';

import Home from "./HomePage/HomePage";
import Events from "./EventsPage/EventsPage";
import Event from "./EventPage/EventPage";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/event/:titleEvent" component={Event} />
      </Switch>
    );
}

export default Routes