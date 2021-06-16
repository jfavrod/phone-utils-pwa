import React from 'react';
import { Grid } from '@material-ui/core';

import MenuItem from '../MainMenu/MenuItem';

const Conversions = () => {
  return (<Grid container spacing={2}>
    <MenuItem
      path="/"
      value="Main Menu"
    />

    <MenuItem
      path="/convert/temp"
      value="Temperature"
    />
  </Grid>);
};

export default Conversions;
