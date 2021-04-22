import React from 'react';

import Home from "./pages/HomePage/HomePage";
import Events from "./pages/EventsPage/EventsPage";
import Event from "./pages/EventPage/EventPage";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
      <Switch>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/event/:titleEvent">
          <Event />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
}

export default Routes