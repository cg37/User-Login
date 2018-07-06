import React from 'react';

import IconNav from "./navbar"
import Cardinfo from '../containers/cardinfo';
import Tabtest from '../containers/tabtest'
import '../css/index.css';
import Login from './login'



class TablePage extends React.Component {


    render() {
        return (     
                 <div> 
            <div>
                <IconNav/>
            </div>
            <div>
                <Tabtest class="tabs" />
            </div>        
                </div>
        );
    }
}
export default TablePage;
