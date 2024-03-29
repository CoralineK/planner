import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Month from './pages/Month';
import Day from './pages/Day';
import Navigation from './components/Navigation';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/register" component={Auth} />
        <Navigation>
          <Route path="/home" component={Home} />
          <Route path="/month" component={Month} />
          <Route path="/day" component={Day} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}
