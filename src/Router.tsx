import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Month from './components/Calendars/Month/Month';
import Day from './components/Calendars/Day/Day'
import Navigation from './components/Navigation';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Navigation>
          <Route path="/home" component={Home} />
          {/* <Route path="/fullyear" component={FullYear} /> */}
          <Route path="/month" component={Month} />
          {/* <Route path="/week" component={Week} /> */}
          <Route path="/day" component={Day} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}
