import React, {useEffect, useState, useCallback} from 'react';
import { useStore, useDispatch } from 'react-redux';
import { handleSearch, setCurrent, setForecast } from '../../redux/actions';

export const Search = _ => {
  const store = useStore();
  const [city, setCity] = useState(''); 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if(city && city.trim() !== '') {
      return pushDataToState(city);
    }
  }

  const pushDataToState = search => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bdb758c73d929483146ad6c4d174a694`)
    .then( response => response.json())
    .then( data => {
      dispatch(setCurrent(data));

      if(data.cod === '404') return;
      else {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=bdb758c73d929483146ad6c4d174a694`)
          .then( response => response.json())
          .then( data => dispatch(setForecast(data)))
          .catch( err => console.log(err));
      }
    })
  };

  const handleCity = (e) => setCity(e.target.value);

  const fetchCity = (city) => {
    setCity(city);
    dispatch(handleSearch(city));
    pushDataToState(store.getState().search);
  }

  const getCityByLocation = useCallback(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetch('https://ipinfo.io/json?token=839702aade76be')
            .then(res => res.json())
            .then(data => {
              fetchCity(data.city);
            })
        }, 
        error => {
          fetchCity('Kiyv');
        }
      );
      
    } else {
      fetchCity('Kiyv');
    }
  }, [dispatch]);
  
  useEffect(() => {
    getCityByLocation();
  }, [getCityByLocation])

  return(
    <form className="search__bar" onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Your City" 
        value={city}
        className="text--reg search__input"
        onChange={ handleCity }
        onBlur={handleSubmit}
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