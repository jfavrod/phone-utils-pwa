import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart'
import { IThermometerProps } from './interfaces';

const Thermometer = (props: IThermometerProps) => {
  const { label, temp, units, variant } = props;

  const convertToC = (f: number) => (f - 32) * (5/9)
  const percent = (c: number) => {
    // If 40 or above, max out.
    if (c >= 40) return 1
    // If -25 or below, hit bottom.
    else if (c <= -25) return 0
    // If below 0...
    else if (c <= 0) return (c + 25) / (80)
    // If above 0...
    else return c / 40
  };

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper>
        <p style={{ textAlign: 'center'}}>{ label }</p>

        <GaugeChart
          formatTextValue={() => `${Math.round(temp)} °`}
          colors={[
            '#F0F0F0',
            '#e6f7ff',
            '#b3e6ff',
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
          percent={ percent(units === 'f' ? convertToC(temp) : temp) }
          textColor="black"
        />
      </Paper>
    </Grid>
  )
};

export default Thermometer;
