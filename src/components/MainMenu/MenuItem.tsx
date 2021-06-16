import React from 'react';

import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import style from './styles';

import { IMenuItemProps } from './interfaces';

/**
 * Extension of GridItem; either full (12) width or half (6).
 */
const MenuItem = (props: IMenuItemProps) => {
  const { path, value, variant } = props;
  const classes = style();

  if (props.hide) return null;

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper className={classes.paper}>
        <Button>
          <Link className={classes.btnlink} to={path}>{ value }</Link>
        </Button>
      </Paper>
    </Grid>
  );
};

export default MenuItem;
