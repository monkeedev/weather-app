import React from 'react';
import { getIcon, getDay, getMonth } from '../../utils/functions';

export const Dashboard = ({ current }) => {
  const { weather, main } = current;

  if(current.cod === '404') return null;
  return(
    <section className="dashboard">
      <div className="dashboard__icon">
        <img src={getIcon(weather[0].id)} alt={getIcon(weather[0].main)} className="dashboard__icon-image"/>
        <p className="text text--reg dashboard__icon-text">
          {weather[0].main}
        </p>
      </div>
      <div className="dashboard__temperature">
        <h1 className="text text--header dashboard__temperature-text--main">
          {(Math.round(main.temp - 273.15)).toFixed(1)}&deg;C
        </h1>
        <h3 className="text text--orange text--header dashboard__temperature-text--fl">
          Feels like {(Math.round(main.feels_like - 273.15)).toFixed(1)}&deg;C
        </h3>
      </div>
      <div className="dashboard__date">
        <p className="text text--reg dashboard__date-text">
          {getDay(new Date().getDate())}, <span className="text--orange">{new Date().getDate()} {getMonth(new Date().getMonth())} {new Date().getFullYear()}</span>
        </p>
      </div> 
    </section>
  );
};
