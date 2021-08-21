import React from 'react';

import { Grid } from '@material-ui/core';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Lists from '../Lists';
import MenuItem from './MenuItem';
import Calendar from '../Calendar/Calendar'
import Conversions from '../Conversions';
import Temperature from '../Conversions/Temperature';
import Weather from '../Weather';

import styles from './styles';

const MainMenu = () => {
  const classes = styles();

  return (
    <div className={`App ${classes.root}`}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Grid container spacing={2}>
              <MenuItem
                path="/convert"
                value="Conversions"
              />

              <MenuItem
                path="/lists"
                value="Lists"
              />

              <MenuItem
                path="/weather"
                value="Weather"
              />
            </Grid>
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>

          <Route exact path="/convert">
            <Conversions />
          </Route>

          <Route exact path="/convert/temp">
            <Temperature />
          </Route>

          <Route path="/lists">
            <Lists />
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
