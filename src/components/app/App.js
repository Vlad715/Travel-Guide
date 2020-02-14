import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../header';
import MainPage from '../main-page';
import Country from '../country';
import City from '../city';

import './App.scss';

const  App = () => {
  return (
    <div className="app">
          <Header/>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/country/" component={Country}/>
            <Route path="/city/" component={City}/>
          </Switch>
    </div>
  );
}

export default App;
