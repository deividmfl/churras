import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Events from '../screens/Events';
import Event from '../screens/Event';

function AppRouter() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/event/:id" component={Event} />
      </Router>
    );
}

export default AppRouter;
