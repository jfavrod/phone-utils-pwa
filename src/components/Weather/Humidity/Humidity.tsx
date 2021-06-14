import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart'
import { IHumidityProps } from './interfaces';

const Humidity = (props: IHumidityProps) => {
  const { label, percent, variant } = props;

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper>
        <p style={{ textAlign: 'center'}}>{ label }</p>

        <GaugeChart
          formatTextValue={() => `${percent} %`}
          colors={[
            '#ce0003',
            '#ffff00',
            '#b3ff00',
            '#00b91e',
            '#b3ff00',
            '#ffff00',
            '#ce0003',
          ]}
          id="temp"
          needleBaseColor="#ff3b00"
          needleColor="#ff3b00"
          nrOfLevels={7}
          percent={percent / 100}
          textColor="black"
        />
      </Paper>
    </Grid>
  )
};

export default Humidity;
