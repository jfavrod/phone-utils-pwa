import React, { useEffect, useCallback, useState } from 'react';

import { Grid } from '@material-ui/core';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Lists from '../Lists';
import MenuItem from './MenuItem';
import Calendar from '../Calendar/Menu'
import Conversions from '../Conversions';
import HuntingCalendar from '../Calendar/Calendar';
import Temperature from '../Conversions/Temperature';
import Weather from '../Weather';

import styles from './styles';
import { useMemo } from 'react';

const MainMenu = () => {
  const classes = styles();
  const [ menuItems, setMenuItems ] = useState<React.ReactElement[]>()

  const config = [
    {
      path: '/',
      items: [
        {path: 'convert', value: 'Conversions' },
        {path: 'lists', value: 'Lists' },
        {path: 'weather', value: 'Weather' },
        {path: 'calendar', value: 'Calendars' },
      ]
    }
  ];

  const renderMenu = useCallback(() => {
    const path = window.location.pathname;
    const entry = config.find((entry) => new RegExp(path).test(entry.path))
    const items: Array<React.ReactElement> = [];

    if (entry) {
      entry.items.forEach((item) => {
        items.push(<MenuItem path={item.path} value={item.value} />);
      });
    }
    console.log(entry);
    return items;
  }, []);

  useEffect(() => {
    setMenuItems(renderMenu())
  }, [setMenuItems , renderMenu ]);

  return (
    <div className={`App ${classes.root}`}>
      <BrowserRouter>
          <Grid container spacing={2}>
            {renderMenu()}
            {/* <MenuItem
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

            <MenuItem
              path="/calendar"
              value="Calendars"
            /> */}
          </Grid>

        <Switch>
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
