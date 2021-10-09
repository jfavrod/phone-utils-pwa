import React from 'react';
import { MenuItem } from '../MainMenu';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

const Menu = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <MenuItem
              path="/"
              value="MainMenu"
            />
            <MenuItem
              path="/calendar/hunting"
              value="Hunting Calendar"
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Menu;
