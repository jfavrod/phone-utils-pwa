import React, { useEffect, useState } from 'react';
import Cal, { CalendarTileProperties } from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import hunting_data from '../../data/hunting.json';
import { MenuItem } from '@material-ui/core';

type AnimalName = 'Cottontail Rabbit' | 'Coyote' | 'Crow' | 'Raccoon' | 'Sandhill Crane' | 'Tree Squirrel' | 'Turkey';
type UsStates = 'south-dakota'

type AnimalData = {
  [idx in  AnimalName ]: {
    'daily-limit'?: number;
    'license-requirements'?: {
      nonresidents?: string;
      residents?: string;
    };
    'open-area'?: string;
    'open-hours-end'?: 'sunset' | 'sunrise' | string;
    'open-hours-start'?: 'sunset' | 'sunrise' | string;
    'possession-limit'?: number;
    'seasons'?: {
      [year: string]: Array<{ start: string, end: string }>
    },
    'state-info': {
      [infotitle: string]: string;
    }
  };
};

type HuntingData = {
  states: {
    [state in UsStates]: AnimalData;
  }
}

const normDate = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDay());

const Calendar = () => {
  const [ huntingData, setHuntingData ] = useState<HuntingData>();

  const handleOnDayClick = (date: Date) => {
    console.log('selected date', date);
  };

  useEffect(() => {
    setHuntingData(Object.freeze(hunting_data) as any as HuntingData);
  }, [setHuntingData]);

  const handleHuntingData = (calstuff: CalendarTileProperties, data?: HuntingData): React.ReactElement[] => {
    const res: React.ReactElement[] = [];

    if (data && data.states) {
      Object.keys(data.states).forEach((state) => {
        Object.keys(data.states[state as UsStates]).forEach((animalName: AnimalName | string) => {
          const animal = data.states[state as UsStates][animalName as AnimalName];

          if (animal.seasons) {
            const seasons = animal.seasons;

            Object.keys(seasons).forEach((year) => {
              seasons[year].forEach((startAndEnd) => { 
                const caltime = normDate(calstuff.date)
                const starttime = new Date(startAndEnd.start)
                const endtime = new Date(startAndEnd.end)

                if (caltime >= starttime && caltime <= endtime) {
                  const normAnimalName = animalName.toLowerCase();
                  if (normAnimalName.includes('rabbit')) res.push(<>🐇</>);
                  else if (normAnimalName.includes('coyote')) res.push(<><img alt="coyote" width="15px" src="/calendar-icons/wolf-icon.png" /></>);
                  else if (normAnimalName.includes('raccoon')) res.push(<>🦝</>);
                  else if (normAnimalName.includes('turkey')) res.push(<>🦃</>);
                  else if (normAnimalName.includes('crow')) res.push(<><img alt="crow" width="15px" src="/calendar-icons/crow-icon.png" /></>);
                  else if (normAnimalName.includes('crane')) res.push(<><img alt="sandhill-crane" width="15px" src="https://img.icons8.com/material-rounded/50/000000/crane-bird.png"/></>)
                  else if (normAnimalName.includes('squirrel')) res.push(<><img alt="squirrel" width="15px" src="/calendar-icons/squirrel-icon.png" /></>);
                  else if (normAnimalName.includes('beaver')) res.push(<>🦫</>);
                  else res.push(<>🥆</>);
                }
              });
            });
          }
        })
      })
    }

    return res;
  }

  return (
    <div>
      <Cal
        calendarType="US"
        onClickDay={handleOnDayClick}
        tileContent={(calstuff) => <>{handleHuntingData(calstuff, huntingData)}</>}
      />
      <p>Icons</p>
      <p>
        <a href="https://icons8.com/icon/fZJA06VDApja/crane-bird">Crane Bird icon by Icons8</a>
      </p>
    </div>
  )
}

export default Calendar;
