import React from 'react';

import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import style from './styles';

import { IMenuItemProps } from './interfaces';

/**
 * Extension of GridItem; either full (12) width or half (6).
 *
 * If path is specified, the MenuItem will be used (in conjunction
 * with ReactRouter) for navigation.
 *
 * If onClick is specified, the MenuItem will be a button who's action
 * will be the onClick method.
 *
 * If both path and onClick are specified, path is preferred.
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
