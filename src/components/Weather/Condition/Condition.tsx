import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { IConditionProps } from './interfaces';

const Condition = (props: IConditionProps) => {
  const { condition, label, variant } = props;

  const defaultIcon = "/weather-icons/alert-icon.png";

  const getIcon = () => {
    switch (condition)
    {
      case 'clear sky':
        return '/weather-icons/fair.png';
      case 'broken clouds':
      case 'few clouds':
        return './weather-icons/few-clouds.png';
      case 'overcast clouds':
        return './weather-icons/overcast.png';
      case 'thunderstorm':
        return './weather-icons/thunderstorms.png';
      case 'scattered clouds':
        return './weather-icons/partly-cloudy.png'
      case 'drizzle':
      case 'mist':
        return '/weather-icons/overcast.png';
      case 'light rain':
      case 'rain':
        return '/weather-icons/rain.png';
      case 'shower rain':
        return '/weather-icons/showers.png';
      case 'freezing rain':
        return '/weather-icons/freezing-rain.png';
      case 'snow':
        return '/weather-icons/snow.png';
      default:
        return defaultIcon;
    }
  };

  return (
    <Grid item xs={ (!variant || variant === 'full') ? 12 : 6}>
      <Paper style={{ textAlign: 'center'}}>
        <p>{ label }</p>
        <img alt={`${condition || 'default'} icon`} src={getIcon()} />
      </Paper>
    </Grid>
  );
}

export default Condition;
