import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import TempInput from './TempInput';
import styles from '../styles';

const Temp = () => {
  const classes = styles();

  const [ ctemp, setCtemp ] = useState(0);
  const [ ftemp, setFtemp ] = useState(32);

  const setTemps = (corf: string, temp: number) => {
    if (new RegExp('C').test(corf.toUpperCase())) {
      setCtemp(temp);
      setFtemp( Number(((temp * 9/5) + 32).toFixed(2)) );
    }
    else {
      setFtemp(temp);
      setCtemp( Number(((temp - 32) * 5/9).toFixed(2)) );
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <TempInput corf="c" setTmp={(temp) => setTemps('c', temp)} temp={ctemp} />
        <TempInput corf="f" setTmp={(temp) => setTemps('f', temp)} temp={ftemp} />
      </Grid>
    </div>
  );
};

export default Temp;
