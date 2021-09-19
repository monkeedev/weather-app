import React, { useEffect, useState } from 'react'
import { getDate } from '../../utils/functions';
import { Slide } from './Slide';

export const StaticSlides = ({data}) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if(data.length > 0) {
      setForecast(data);
    }
  }, [data]);

    return(
      <ul className="list slider">
      {
        forecast.map( (i, k) => {
          const { temp, feels_like, weather } = i;
          const { min, max } = temp;
          const { day, night, eve, morn } = feels_like;
  
          const nextDayTimestamp = Date.now() + 1000 * 60 * 60 * 24 * (k + 1);
          const date = getDate(nextDayTimestamp);
          const temperature = (Math.round((min + max) / 2 - 273.15)).toFixed(1);
          const fl = (Math.round((day + night + eve + morn) / 4 - 273.15)).toFixed(1);
  
          return(
            <li className="text--center slider__item" key={`SlideStatic_${k}`}>
              <Slide 
                date={date}
                weather={weather}
                temperature={temperature}
                feelsLike={fl}
              />
            </li>
          )
        }) 
      }
      </ul>
    ) 
};
