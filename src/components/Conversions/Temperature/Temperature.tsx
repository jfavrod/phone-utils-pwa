import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import MenuItem from '../../MainMenu/MenuItem';
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

  return (<Grid container spacing={2}>
    <MenuItem
      path="/convert"
      value="Back"
      variant='half'
    />

    <MenuItem
      path="/"
      value="Main Menu"
      variant='half'
    />

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <TempInput corf="c" setTmp={(temp) => setTemps('c', temp)} temp={ctemp} />
        <TempInput corf="f" setTmp={(temp) => setTemps('f', temp)} temp={ftemp} />
      </Grid>
    </div>
  </Grid>);
};

export default Temp;
