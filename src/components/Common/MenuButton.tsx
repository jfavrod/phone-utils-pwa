import { Button, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { MouseEventHandler } from 'react';

import styles from './styles';

export interface MenuButtonProps {
  disabled?: boolean,
  hide?: boolean,
  onClick?: MouseEventHandler,
  value?: string,
  variant?: 'full' | 'half',
}

const MenuButton = (props: MenuButtonProps) => {
  const { onClick, value, variant } = props;
  const classes = styles();

  if (props.hide) return null;

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper className={classes.paper} onClick={onClick}>
        <Button disabled={props.disabled}>
          { value }
        </Button>
      </Paper>
    </Grid>
  );
};

export default MenuButton;
