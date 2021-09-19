import {days, months} from './constants';

import Thunderstorm from '../img/forecast/006-thunderstorm.svg';
import Drizzle from '../img/forecast/019-raining.svg'; 
import Rain from '../img/forecast/023-rain-4.svg'; 
import Snow from '../img/forecast/016-snowing-1.svg';
import Atmosphere from '../img/forecast/031-cloudy.svg';
import Clear from '../img/forecast/013-sunny.svg';   
import Clouds from '../img/forecast/035-cloud.svg';   

export const getDate = timestamp => {
  return parseDate(timestamp ?? new Date(Date.now()));
}

const parseDate = date => {
  if (!date) {
    return {}
  } else {
    let o = {};

    const _date = new Date(date);

    o.year = _date.getFullYear();
    o.month = _date.getMonth() + 1;
    o.day = _date.getDate();
    o.monthLiteral = months[_date.getMonth()];
    o.dayLiteral = days[_date.getDay()];

    return o;
  }
}

export const getIcon = id => {
  if(id >= 200 && id < 300) return Thunderstorm;
  else if(id >= 300 && id < 400) return Drizzle;
  else if(id >= 500 && id < 600) return Rain;
  else if(id >= 600 && id < 700) return Snow;
  else if(id >= 700 && id < 800) return Atmosphere;
  else if(id === 800) return Clear;
  else if(id >= 801 && id < 900) return Clouds;
}

export const getWindDirection = deg => {
  if(deg >= 0 && deg < 45) return '🡬';
  else if(deg >= 45 && deg < 90) return '🡩';
  else if(deg >= 90 && deg < 135) return '🡭';
  else if(deg >= 135 && deg < 180) return '🡪';
  else if(deg >= 180 && deg < 225) return '🡮';
  else if(deg >= 225 && deg < 270) return '🡫';
  else if(deg >= 270 && deg < 315) return '🡯';
  else if(deg >= 315 && deg < 360) return '🡨';
}