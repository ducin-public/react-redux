import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { getStore } from './store/store';
import { selectCountry } from './store/actions';
import { fetchGeo, fetchEmployees, rotateSelectedCountry } from './store/thunks';

const store = getStore();
// store.dispatch(selectCountry('Polskaaaa'))
store.dispatch(fetchGeo())
store.dispatch(fetchEmployees('Poland'))
// store.dispatch(rotateSelectedCountry(5))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
