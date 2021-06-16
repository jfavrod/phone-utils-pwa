import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import ServiceFactory from '../../context/ServiceFactory';
import { ICurrentConditions } from '../../services/Weather/interfaces';
import Thermometer from './Thermometer';
import Condition from './Condition';
import { IWeather } from '../../services/Weather/OpenWeatherAPI/interfaces';
import Humidity from './Humidity';

const Weather = () => {
  const [ currentWeather, setCurrentWeather ] = useState<ICurrentConditions>();

  const ctemp = currentWeather?.ctemp || 0;

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

  return(<>
    <Grid container>
      <Thermometer label='Current Temp.' temp={ctemp} />

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
                temp={currentWeather?.highTemp || 0}
              />

              <Thermometer
                label="Today's Low"
                temp={currentWeather?.lowTemp || 0}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>);
};

export default Weather;
