import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/index.css'
import nokia_icon from '../css/nokia_blue.png';
const navstyle = {
    backgroundColor:"#D5DBDB"
}
    
class IconNav extends React.Component{
render(){
    return(
        <div> 
            <nav class="navbar navbar-light" style = {navstyle}>
                <a className="navbar-brand" >
                    <img src={nokia_icon} width="177" height="30" alt=""/>
                </a>
            </nav>
        </div>
    )
}
}
export default IconNav;