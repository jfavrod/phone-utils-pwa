import React from 'react';

import { Grid } from '@material-ui/core';

import MenuItem from '../MainMenu/MenuItem';
import Temperature from './Temperature';
import { IConversionMenuProps } from './interfaces';

const Menu = (props: IConversionMenuProps) => {
  const { navigate } = props;

  const mainMenuItem = (varient?: 'full' | 'half') => (<MenuItem
    path="/"
    onClick={() => navigate('/')}
    value="Main Menu"
    variant={ varient || 'full' }
  />);

  const getMenuItems = () => {
    switch (window.location.pathname)
    {
      case '/convert/tmp':
        return (
          <Grid container spacing={2}>
            <MenuItem
              path="/convert"
              onClick={() => navigate('/convert')}
              value="Back"
              variant='half'
            />

            { mainMenuItem('half') }

            <Temperature />
          </Grid>
        );
      default:
        return (
          <Grid container spacing={2}>
            { mainMenuItem() }

            <MenuItem
              path="/convert/tmp"
              onClick={() => navigate('/convert/tmp')}
              value="Temperature"
            />
          </Grid>
        );
    }
  };

  return getMenuItems();
};

export default Menu;
