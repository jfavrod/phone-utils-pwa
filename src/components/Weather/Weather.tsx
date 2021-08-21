import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import MenuButton from '../common/MenuButton';
import Condition from './Condition';
import Humidity from './Humidity';
import MenuItem from '../MainMenu/MenuItem';
import Thermometer from './Thermometer';

import ServiceFactory from '../../context/ServiceFactory';
import { ICurrentConditions } from '../../services/Weather/interfaces';
import { IWeather } from '../../services/Weather/OpenWeatherAPI/interfaces';

const Weather = () => {
  const [ currentWeather, setCurrentWeather ] = useState<ICurrentConditions>();
  const [ units, setUnits ] = useState<'c' | 'f'>('c');

  const [ temp, setTemp ] = useState(currentWeather?.ctemp || 0);
  const [ lowTemp, setLowTemp ] = useState(currentWeather?.lowTemp || 0);
  const [ highTemp, setHighTemp ] = useState(currentWeather?.highTemp || 0);

  // const ctemp = currentWeather?.ctemp || 0;

  const switchUnits = () => {
    if (units === 'c') {
      setUnits('f');
      setTemp(((currentWeather?.ctemp || 0) * 9/5) + 32);
      setLowTemp(((currentWeather?.lowTemp || 0) * 9/5) + 32);
      setHighTemp(((currentWeather?.highTemp || 0) * 9/5) + 32);
    }
    else {
      setUnits('c');
      setTemp(currentWeather?.ctemp || 0);
      setLowTemp(currentWeather?.lowTemp || 0)
      setHighTemp(currentWeather?.highTemp || 0);
    }
  };

  useEffect(() => {
    const weatherSvc = ServiceFactory.getWeatherSvc();

    navigator.geolocation.getCurrentPosition((geopos) => {
      weatherSvc.getCurrentConditions({
        lat: geopos.coords.latitude,
        lon: geopos.coords.longitude,
      })
        .then((data) => {
          setCurrentWeather(data);
        });
    })

  }, [setCurrentWeather]);

  useEffect(() => {
    setTemp(currentWeather?.ctemp || 0);
    setLowTemp(currentWeather?.lowTemp || 0)
    setHighTemp(currentWeather?.highTemp || 0);
  },[currentWeather])

  return(<>
    <Grid container spacing={2}>
      <MenuItem
        path='/'
        value="Main Menu"
      />
      <Grid item xs={12}>
        <MenuButton
          onClick={() => switchUnits()}
          value={ units === 'c' ? 'Switch to F' : 'Switch to C'}
        />
      </Grid>
    </Grid>

    <Grid container>
      <Thermometer label='Current Temp.' temp={temp} units={units} />

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Humidity
              label="Humidity"
              percent={currentWeather?.humidity || 0}
            />

            <Condition condition={currentWeather?.description as IWeather["description"]}/>
          </Grid>

          <Grid item xs={6}>
            <Grid container>
              <Thermometer
                label="Today's High"
                temp={highTemp}
                units={units}
              />

              <Thermometer
                label="Today's Low"
                temp={lowTemp}
                units={units}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>);
};

export default Weather;
