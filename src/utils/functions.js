import Thunderstorm from '../img/forecast/006-thunderstorm.svg';
import Drizzle from '../img/forecast/019-raining.svg'; 
import Rain from '../img/forecast/023-rain-4.svg'; 
import Snow from '../img/forecast/016-snowing-1.svg';
import Atmosphere from '../img/forecast/031-cloudy.svg';
import Clear from '../img/forecast/013-sunny.svg';   
import Clouds from '../img/forecast/035-cloud.svg';   

export const getDay = number => {
  const days = [ 'Wen', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue' ];
  
  return days[number % 7];
}

export const getMonth = number => {
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  
  return months[number];
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
  if(deg >= 0 && deg < 45) return 'nw';
  else if(deg >= 45 && deg < 90) return 'n';
  else if(deg >= 90 && deg < 135) return 'ne';
  else if(deg >= 135 && deg < 180) return 'e';
  else if(deg >= 180 && deg < 225) return 'se';
  else if(deg >= 225 && deg < 270) return 's';
  else if(deg >= 270 && deg < 315) return 'sw';
  else if(deg >= 315 && deg < 360) return 'w';
}