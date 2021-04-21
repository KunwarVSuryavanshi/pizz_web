import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'
import OrderPizza from './components/OrderPizza';
import BuildPizzas from './components/BuildPizza'
import HomeScreen from './components/HomeScreen';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import store from './redux/store'
// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}/>
      <Route path='/home' component={HomeScreen}/>
      <Route path='/orderPizza' component={OrderPizza}/>
      <Route path='/buildPizza' component={BuildPizzas}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
