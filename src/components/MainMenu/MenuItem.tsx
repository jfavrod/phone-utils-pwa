import React from 'react';

import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import style from './styles';

import { IMenuItemProps } from './interfaces';

/**
 * Extension of GridItem; either full (12) width or half (6).
 */
const MenuItem = (props: IMenuItemProps) => {
  const { onClick, path, value, variant } = props;
  const classes = style();

  if (props.hide) return null;

  if (path) {
    return (
      <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
        <Link className={classes.btnlink} to={path}>
          <Paper className={classes.paper}>
            <Button disabled={props.disabled}>{ value }</Button>
          </Paper>
        </Link>
      </Grid>
    );
  }

  if (onClick) {
    return (
      <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
        <Paper className={classes.paper} onClick={onClick}>
          <Button disabled={props.disabled}>
            { value }
          </Button>
        </Paper>
      </Grid>
    );
  }

  return null;
};

export default MenuItem;
