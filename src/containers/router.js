import React from 'react';
import {BrowserRouter as Router,
        Link,
        Redirect,
        Switch,
        Route  ,
        } from 'react-router-dom';

import Login from "../components/login";
import Rapinfo from "../components/tablepage";

class Routes_demo extends React.Component{
    render(){
        return(
            <Router >
                <div>
                <Route exact path ='/' component={Login}/>
                <Route exact path='/rapinfo' component={Rapinfo}/>
                </div>
            </Router>
            
           
        )
    }
}

export default Routes_demo