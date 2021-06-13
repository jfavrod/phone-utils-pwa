import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Temp } from '../Conversions';
import MenuItem from './MenuItem';
import Weather from '../Weather';

import styles from './styles';

const MainMenu = () => {
  const classes = styles();
  const [ path, setPath ] = useState(window.location.pathname);

  const mainMenuItem = (varient?: 'full' | 'half') => (<MenuItem
    path="/"
    onClick={() => setPath('/')}
    value="Main Menu"
    varient={ varient || 'full' }
  />);

  const getMenuItems = () => {
    switch (path)
    {
      case '/':
        return (
          <Grid container spacing={3}>
            <MenuItem
              path="/convert"
              onClick={() => setPath('/convert')}
              value="Conversions"
            />

            <MenuItem
              path="/weather"
              onClick={() => setPath('/weather')}
              value="Weather"
            />
          </Grid>
        );
      case '/convert':
        return (
          <Grid container spacing={3}>
            { mainMenuItem() }

            <MenuItem
              path="/convert/tmp"
              onClick={() => setPath('/convert/tmp')}
              value="Temperature"
            />
          </Grid>
        );
      case '/convert/tmp':
        return (
          <Grid container spacing={3}>
            <MenuItem
              path="/convert"
              onClick={() => setPath('/convert')}
              value="Back"
              varient='half'
            />

            { mainMenuItem('half') }
          </Grid>
        );
      default: return (
        <Grid container spacing={3}>
          { mainMenuItem() }
        </Grid>
      );
    }
  }

  return (
    <div className={`App ${classes.root}`}>
      <BrowserRouter>
        { getMenuItems() }

        <Switch>
          <Route exact path="/convert/tmp">
            <Temp />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default MainMenu;
