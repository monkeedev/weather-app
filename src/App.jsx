import React from 'react';
import { Dashboard } from './components/Info/Dashboard';
import { Info } from './components/Info/Info';
import { Slider } from './components/Slider/Slider';

import { useStore, connect } from 'react-redux';
import { Empty } from './components/Empty/Empty';

const mapStateToProps = state => ({ data: state.data  });

export const App = connect(mapStateToProps)(
  _ => {
    const store = useStore();
    const { current, forecast } = store.getState().data;

    // empty
    if( Object.values( current ).length === 0 ) return null;
    if( +current.cod === 404 ) return <Empty city={store.getState().search} /> ;
    return(
      <main>
        <Dashboard current={current} />
        <Slider forecast={forecast} />
        <Info current={current} />
      </main>
    )
  }
)