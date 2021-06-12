import React from 'react';
import { Grid, Input, Paper } from '@material-ui/core';

import styles from '../styles';

import { ITempInputProps } from './interfaces';

const TempInput = (props: ITempInputProps) => {
  const { corf, tmp, setTmp } = props;
  const classes = styles();

  return (<>
    <Grid item xs={5}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Input
              type="number"
              style={{ fontSize: 28, height: 100 }}
              onChange={(event) => {
                setTmp(Number(event.target.value));
              }}
              value={tmp}
            />
          </Grid>

          <Grid item>
            &#176;{corf.toUpperCase()}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </>);
};

export default TempInput;
