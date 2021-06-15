import { Grid } from '@material-ui/core';

import React, { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Lists from '../Lists';
import MenuItem from './MenuItem';
import { Menu as ConvertMenu } from '../Conversions';

import Weather from '../Weather';
import WeatherMenu from '../Weather/Menu';

import styles from './styles';

const MainMenu = () => {
  const classes = styles();

  const [ path, setPath ] = useState('/');

  const getMenuItems = () => {
    if (path === '/' || path === '') {
      return (
        <Grid container spacing={2}>
          <MenuItem
            path="/convert"
            onClick={() => setPath('/convert')}
            value="Conversions"
          />

          <MenuItem
            path="/lists"
            onClick={() => setPath('/lists')}
            value="Lists"
          />

          <MenuItem
            path="/weather"
            onClick={() => setPath('/weather')}
            value="Weather"
          />
        </Grid>
      );
    }

    return null;
  };

  return (
    <div className={`App ${classes.root}`}>
      <BrowserRouter>
        { getMenuItems() }

        <Switch>
          <Route path="/convert">
            <ConvertMenu navigate={setPath} />
          </Route>

          <Route path="/lists">
            <Lists navigate={setPath} />
          </Route>

          <Route exact path="/weather">
            <WeatherMenu navigate={setPath} />
            <Weather />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default MainMenu;
