import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import TempInput from './TempInput';
import styles from '../styles';

const Temp = () => {
  const classes = styles();

  const [ ctmp, setCtmp ] = useState(0);
  const [ ftmp, setFtmp ] = useState(32);

  const setTemps = (corf: string, tmp: number) => {
    if (new RegExp('C').test(corf.toUpperCase())) {
      setCtmp(tmp);
      setFtmp( Number(((tmp * 9/5) + 32).toFixed(2)) );
    }
    else {
      setFtmp(tmp);
      setCtmp( Number(((tmp - 32) * 5/9).toFixed(2)) );
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <TempInput corf="c" setTmp={(tmp) => setTemps('c', tmp)} tmp={ctmp} />
        <TempInput corf="f" setTmp={(tmp) => setTemps('f', tmp)} tmp={ftmp} />
      </Grid>
    </div>
  );
};

export default Temp;
