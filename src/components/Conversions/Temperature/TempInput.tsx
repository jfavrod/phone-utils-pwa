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
              inputProps={{ style: { textAlign: 'center' } }}
              onChange={(event) => {
                setTmp(Number(event.target.value));
              }}
              style={{ fontSize: 28, height: 100 }}
              type="number"
              value={tmp}
            />
          </Grid>

          <Grid item style={{ width: '100%' }}>
            <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
              <p>&#176;{corf.toUpperCase()}</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </>);
};

export default TempInput;
