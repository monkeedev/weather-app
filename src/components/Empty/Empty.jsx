import React from 'react';
import Storm from '../../img/forecast/empty.svg';

export const Empty = ({ city = 'city name'}) => (
  <section className="empty">
    <img src={ Storm } alt="Empty" className="empty__icon"/>
    <p className="text text--reg empty__text">Can't get data for <span className="text--orange">{city}</span></p>
  </section>
)