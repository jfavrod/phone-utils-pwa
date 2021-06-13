import React, { useEffect, useState } from 'react';

import { Paper } from '@material-ui/core';

import ServiceFactory from '../../context/ServiceFactory';
import { ICurrentConditions } from '../../services/Weather/interfaces';

const Weather = () => {
  const [ currentWeather, setCurrentWeather ] = useState<ICurrentConditions>();

  useEffect(() => {
    const weatherSvc = new ServiceFactory().getWeatherSvc();

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

  return(
    <Paper>
      <p>Your Current Weather</p>
      <table>
        <tbody>
          <tr>
            <td><b>Current Temp (c)</b></td>
            <td>{ Math.round(currentWeather?.ctemp || 0) }</td>
          </tr>
          <tr>
            <td><b>Today High</b></td>
            <td>{ Math.round(currentWeather?.highTemp || 0) }</td>
          </tr>
          <tr>
            <td><b>Today Low</b></td>
            <td>{ Math.round(currentWeather?.lowTemp || 0) }</td>
          </tr>
          <tr>
            <td><b>Description</b></td>
            <td>{ currentWeather?.description }</td>
          </tr>
          <tr>
            <td><b>Humiditiy</b></td>
            <td>{ currentWeather?.humidity }</td>
          </tr>
        </tbody>
      </table>
    </Paper>
  )
};

export default Weather;
