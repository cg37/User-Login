import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import {Router,
        Route,
        link,
        hashHistory,
        IndexRoute,
        BrowserRouter
    } from 'react-router'; 
//import {StackNavigatior,
//} from 'react-navigation'

import Login from "./components/login"

import Route_demo from "./containers/router"
//import Posttest from "./containers/posttest"

import TablePage from './components/tablepage';


ReactDOM.render(
    < TablePage/>, document.getElementById('root'));
//registerServiceWorker();
