import React from 'react';

import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import style from './styles';

import { IMenuItemProps } from './interfaces';

const MenuItem = (props: IMenuItemProps) => {
  const { path, onClick: setPath, value, variant: varient } = props;
  const classes = style();

  return (
    <Grid item xs={ (!varient || varient === 'full') ? 12 : 6}>
      <Paper className={classes.paper}>
        <Button onClick={() => setPath(path)}>
          <Link className={classes.btnlink} to={path}>{ value }</Link>
        </Button>
      </Paper>
    </Grid>
  );
};

export default MenuItem;
