import React from 'react';
import { connect, useStore } from 'react-redux';

import { getWindDirection } from '../../utils/functions';

const mapStateToProps = state => ({ current: state.data.current });

export const Info = connect(mapStateToProps)(
  _ => {
    const store = useStore();
    
    const { current } = store.getState().data;

    const createInfoItems = _ => {
      return(
        <>
          <li className="text text--reg info__item">
            <p className="text info__text--key info__text--humidity">Humidity</p>
            <strong className="text info__text--value">{current.main.humidity}%</strong>
          </li>
          <li className="text text--reg info__item">
            <p className="text info__text--key info__text--pressure">Air pressure</p>
            <strong className="text info__text--value">{(current.main.pressure * 0.750063755419211).toFixed(2)}mm</strong>
          </li>
          <li className="text text--reg info__item">
            <p className="text info__text--key info__text--wind">Wind</p>
            <strong className="text info__text--value">{current.wind.speed}m/s <span className={`info__icon info__icon--direction-${getWindDirection(current.wind.deg)}`}></span></strong>
          </li>
        </>
      )
    }

    return(
      <ul className="list info">
        {
          Object.keys(current).length === 0 ? 
          <></> :
          <>
            { createInfoItems() }
          </>
        }
      </ul>
    );
  }
)