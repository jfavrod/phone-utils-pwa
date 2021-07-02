import React from 'react';

import { Button, Grid, TextField } from '@material-ui/core';

import styles from './style';

const Login = () => {
  const classes = styles();

  return(
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Login</h1>
        </Grid>

        <Grid item xs={12}>
          <TextField label='Username' />
        </Grid>

        <Grid item xs={12}>
          <TextField label='Password' />
        </Grid>

        <Grid item xs={4}>
          <Button color="primary">
            Sign-in
          </Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default Login;
