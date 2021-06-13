import React from 'react';
import { Grid, Input, Paper } from '@material-ui/core';

import styles from './styles';

import { IConverionInputProps } from './interfaces';

const ConversionInput = (props: IConverionInputProps) => {
  const { label, onValueChange, value } = props;
  const classes = styles();

  return (<>
    <Grid item xs={5}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Input
              inputProps={{ style: { textAlign: 'center' } }}
              onChange={(event) => {
                onValueChange(Number(event.target.value));
              }}
              style={{ fontSize: 28, height: 100 }}
              type="number"
              value={value}
            />
          </Grid>

          <Grid item style={{ width: '100%' }}>
            <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
              <p>{ label }</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </>);
};

export default ConversionInput;
