import React from 'react';
import { getWindDirection } from '../../utils/functions';

export const Info = ({ current }) => {
  const { main, wind } = current;

  const createInfoItems = _ => {
    const { humidity, pressure } = main;
    const { speed, deg } = wind;

    return(
      <>
        <li className="text text--reg info__item">
          <p className="text info__text--key info__text--humidity">Humidity</p>
          <strong className="text info__text--value">
            { humidity} %
          </strong>
        </li>
        <li className="text text--reg info__item">
          <p className="text info__text--key info__text--pressure">Air pressure</p>
          <strong className="text info__text--value">
            { (pressure * 0.750063755419211).toFixed(2) }mm
          </strong>
        </li>
        <li className="text text--reg info__item">
          <p className="text info__text--key info__text--wind">Wind</p>
          <strong className="text info__text--value">
            { speed }m/s { getWindDirection( deg ) }
          </strong>
        </li>
      </>
    )
  }

  if(current.cod === '404') return null;
  return(
    <ul className="list info">
      { createInfoItems() }
    </ul>
  );
}