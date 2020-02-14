import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import TravelService from './services/travel-service';
import {TravelServiceProvider} from './components/travel-service-context';

import App from './components/app';
import store from './store';

const travelService = new TravelService();

ReactDOM.render(
    <Provider store={store}>
        <TravelServiceProvider value={travelService}>
            <Router>
                <App/>
            </Router>
        </TravelServiceProvider>
    </Provider>
    ,document.getElementById('root')
);
