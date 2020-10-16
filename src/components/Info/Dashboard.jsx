import React from 'react';
import { connect, useStore } from 'react-redux';

import { getIcon, getDay, getMonth } from '../../utils/functions';

const mapStateToProps = state => ( { current: state.data.current })

export const Dashboard = connect(mapStateToProps)(
  _ => {
    const store = useStore();

    const { current } = store.getState().data;

    return(
      <section className="dashboard">
        { 
          Object.keys(current).length === 0 ? 
            <></> : 
            <>
              <div className="dashboard__icon">
                <img src={getIcon(current.weather[0].id)} alt={getIcon(current.weather[0].main)} className="dashboard__icon-image"/>
                <p className="text text--reg dashboard__icon-text">
                  {current.weather[0].main}
                </p>
              </div>
              <div className="dashboard__temperature">
                <h1 className="text text--header dashboard__temperature-text--main">
                  {(Math.round(current.main.temp - 273.15)).toFixed(1)}&deg;C
                </h1>
                <h3 className="text text--orange text--header dashboard__temperature-text--fl">
                  Feels like {(Math.round(current.main.feels_like - 273.15)).toFixed(1)}&deg;C
                </h3>
              </div>
              <div className="dashboard__date">
                <p className="text text--reg dashboard__date-text">
                  {getDay(new Date().getDate())}, <span className="text--orange">{new Date().getDate()} {getMonth(new Date().getMonth())} {new Date().getFullYear()}</span>
                </p>
              </div> 
            </>
        }
      </section>
    );
  }
);
