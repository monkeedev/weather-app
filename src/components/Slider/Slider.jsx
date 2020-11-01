import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { getIcon, getDay, getMonth } from '../../utils/functions';

export const Slider = ({ forecast }) => {
  const [ size, setSize ] = useState(window.innerWidth);
  
  useEffect( _ => {
    window.addEventListener('resize', _ => setSize(window.innerWidth));
    window.addEventListener('rotationchange', _ => setSize(window.innerWidth));
  })

  const renderStaticSlides = data => {
    return(
      <ul className="list slider">
      {
        data.map( (i, k) => {
          const { temp, feels_like, weather } = i;
          const { min, max } = temp;
          const { day, night, eve, morn } = feels_like;

          let nextDay = new Date().getDate() + (k + 1);
          let nextDayTimestamp = Date.now() + 1000 * 60 * 60 * 24 * (k + 1);

          return(
            <li className="text--center slider__item" key={k}>
              <p className="text text--reg slider__item-text--date">
                { getDay(nextDay) }, { nextDay }&nbsp; 
                { getMonth( new Date(nextDayTimestamp).getMonth()) }&nbsp; 
                { new Date(nextDayTimestamp).getFullYear() }
              </p>
              <img src={getIcon(weather[0].id)} alt={weather[0].main} className="slider__item-logo"/>
              <div>
                <p className="text text--reg slider__item-text--temperature">
                  { (Math.round((min + max) / 2 - 273.15)).toFixed(1) }&deg;C
                </p>
                <p className="text text--orange text--reg slider__item-text--fl">
                  Feels like { (Math.round((day + night + eve + morn) / 4 - 273.15)).toFixed(1) }&deg;C
                </p>
              </div>
            </li>
          )
        }) 
      }
      </ul>
    ) 
  };

  const renderDynamicSlides = data => {
    return(
      <Swiper
        slidesPerView={3}
        loop={false}
        className="slider"
      >
        {
          data.map( (i, k) => {
            const { temp, feels_like, weather } = i;
  
            return(
              <SwiperSlide className="text--center slider__item" key={k}>
                <p className="text text--reg slider__item-text--date">
                  {getDay(new Date().getDate() + (k + 1))}, {new Date().getDate() + (k + 1)}&nbsp; 
                  {getMonth(new Date(Date.now() + 1000 * 60 * 60 * 24 * (k + 1)).getMonth())}&nbsp; 
                  {new Date(Date.now() + 1000 * 60 * 60 * 24 * (k + 1)).getFullYear()}
                </p>
                <img src={getIcon(weather[0].id)} alt={weather[0].main} className="slider__item-logo"/>
                <div>
                  <p className="text text--reg slider__item-text--temperature">
                    {(Math.round((temp.min + temp.max) / 2 - 273.15)).toFixed(1)}&deg;C
                  </p>
                  <p className="text text--orange text--reg slider__item-text--fl">
                    Feels like {(Math.round((feels_like.day + feels_like.night + feels_like.eve + feels_like.morn) / 4 - 273.15)).toFixed(1)}&deg;C
                  </p>
                </div>
              </SwiperSlide>
            )
          }) 
        }
      </Swiper>
    ) 
  };

  if(Object.keys(forecast).length === 0 ) return null;
  return (
    <>
      { size > 1024 ? renderStaticSlides(forecast.daily) : renderDynamicSlides(forecast.daily) }
    </>
  )
}