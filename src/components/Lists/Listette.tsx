import React from 'react';

import styles from './styles';

import { Grid, Paper } from '@material-ui/core'
import { IListetteProps } from './interfaces';

const Listette = (props: IListetteProps) => {
  const { items, title } = props.data;

  const classes = styles();

  const handleClick = () => {
    props.onClick(props.data);
  };

  return (
    <Grid onClick={handleClick} item xs={12}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={6}>
            <p>{ title }</p>
          </Grid>

          <Grid item xs={2} />

          <Grid item xs={2}>
            { items.length } items
          </Grid>

        </Grid>
      </Paper>
    </Grid>
  );
};

export default Listette;
