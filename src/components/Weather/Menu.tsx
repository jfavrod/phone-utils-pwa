import React from 'react';

import { Grid } from '@material-ui/core';

import MenuItem from '../MainMenu/MenuItem';
import { IWeatherMenuProps } from './interfaces';

const Menu = (props: IWeatherMenuProps) => {
  const { navigate } = props;

  return (<>
    <Grid container spacing={2}>
      <Grid item xs={6}>
      </Grid>

      <MenuItem
        path="/"
        onClick={() => navigate('/')}
        value="Main Menu"
      />
    </Grid>
  </>);
};

export default Menu;
