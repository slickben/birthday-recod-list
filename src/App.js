import React, {Component} from 'react';
import 'bootstrap-4-react/dist/bootstrap-4-react.js';
import Userform from './component/userForm';
import Usertable from './component/userTable';
import {Provider} from "react-redux";
// import { createStore, applyMiddleware} from 'redux';
import './App';
import store from "./redux/store"

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <Userform />
            <Usertable/>
          </div>
          
        </div>
      </Provider>
    );
  }
  
}


