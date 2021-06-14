import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart'
import { IThermometerProps } from './interfaces';

const Thermometer = (props: IThermometerProps) => {
  const { label, temp, units, variant } = props;

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper>
        <p style={{ textAlign: 'center'}}>{ label }</p>

        <GaugeChart
          formatTextValue={() => `${Math.round(temp)} °`}
          colors={[
            '#0715ab',
            '#0062ff',
            '#00ffff',
            '#117f01',
            '#00b91e',
            '#b3ff00',
            '#ffff00',
            '#ffda03',
            '#ff9500',
            '#ff3b00',
            '#ce0003',
          ]}
          id="temp"
          needleBaseColor="#ff3b00"
          needleColor="#ff3b00"
          nrOfLevels={11}
          percent={temp / ( units === 'f' ? 110 : 40) }
          textColor="black"
        />
      </Paper>
    </Grid>
  )
};

export default Thermometer;
