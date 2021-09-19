import React from 'react'
import { getIcon } from '../../utils/functions'

export const Slide = ({date, weather, temperature, feelsLike} ) => {
  return (
    <>
      <p className="text text--reg slider__item-text--date">
        { date.dayLiteral }, { date.day }&nbsp; 
        { date.monthLiteral }&nbsp; 
        { date.year }
      </p>
      <img src={getIcon(weather[0].id)} alt={weather[0].main} className="slider__item-logo"/>
      <div>
        <p className="text text--reg slider__item-text--temperature">
          { temperature }&deg;C
        </p>
        <p className="text text--orange text--reg slider__item-text--fl">
          Feels like { feelsLike }&deg;C
        </p>
      </div>
    </>
  )
}
