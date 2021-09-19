import 'swiper/swiper.scss';
import React, { useState, useEffect } from 'react';

import { StaticSlides } from './StaticSlides';
import { DynamicSlides } from './DynamicSlides';

export const Slider = ({ forecast }) => {
  const [ size, setSize ] = useState(window.innerWidth);
  
  useEffect( _ => {
    window.addEventListener('resize', _ => setSize(window.innerWidth));
    window.addEventListener('rotationchange', _ => setSize(window.innerWidth));
  }, [])

  if(Object.keys(forecast).length === 0 ) return null;
  return (
    <div className="slider--mobile">
      { size > 1024 ? <StaticSlides data={forecast.daily} /> : <DynamicSlides data={forecast.daily} />}
    </div>
  )
}