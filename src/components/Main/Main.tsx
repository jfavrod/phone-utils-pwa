import { Button, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { Temp } from '../Conversions';

import styles from './styles';

const Main = () => {
  const classes = styles();
  const [ path, setPath ] = useState(window.location.pathname);

  const getMenuItems = () => {
    switch (path)
    {
      case '/':
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button onClick={() => setPath('/convert')}>
                  <Link to="/convert">Conversions</Link>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        );
      case '/convert':
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button onClick={() => setPath('/')}>
                  <Link to="/">Main Menu</Link>
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button onClick={() => setPath('/convert/temp')}>
                  <Link to="/convert/temp">Temperature</Link>
                </Button>
              </Paper>
            </Grid>
          </Grid>
        );
      default: return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button onClick={() => setPath('/')}>
                <Link to="/">Main Menu</Link>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <div className={`App ${classes.root}`}>
      <BrowserRouter>
        { getMenuItems() }

        <Switch>
          <Route path="/convert/temp">
            <Temp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default Main;
