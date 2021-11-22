import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import APP  from './App';

const App = () => (
    <Provider store={store}>
    <APP />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));