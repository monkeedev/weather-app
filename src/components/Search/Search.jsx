import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import { handleSearch, setCurrent, setForecast } from '../../redux/actions';

const cities = [ 'Simferopol', 'Moscow', 'New York', 'Kiev', 'London', 'Istanbul'];

export const Search = _ => {
  const store = useStore(); 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { search } = store.getState(); 

    if(search && search.trim() !== '') {
      let req = search;

      return pushDataToState(req);
    }
  }

  const setSearchValue = e => dispatch(handleSearch(e.target.value));

  const pushDataToState = search => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bdb758c73d929483146ad6c4d174a694`)
    .then( response => {
      if(response.ok) return response.json();
    })
    .then( data => {
      if(data === undefined) return;
      dispatch(setCurrent(data));

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=bdb758c73d929483146ad6c4d174a694`)
      .then( response => { 
        if(response.ok) return response.json();
      })
      .then( data => {
        if(data === undefined) return;
        dispatch(setForecast(data));
      })
    })
  };

  dispatch(handleSearch(cities[Math.round(Math.random() * cities.length - 1)]));
  pushDataToState(store.getState().search);

  return(
    <form className="search__bar" onSubmit={ e => handleSubmit(e) }>
      <input 
        type="text" 
        placeholder="Your City" 
        defaultValue={store.getState().search}
        className="text--reg search__input"
        onChange={ e => setSearchValue(e) }
      />
      <span className="search__input-bg"></span>

      <input 
        type="submit"
        className="search__button"
        value=''
      />
    </form>
  )
}