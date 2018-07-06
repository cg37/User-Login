import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/index.css'
import navimg from '../css/navimg.png';
const navstyle = {
    backgroundColor:"#D5DBDB"
}
    
class IconNav extends React.Component{
render(){
    return(
        <div> 
            <nav class="navbar navbar-light" style = {navstyle}>
                <a className="navbar-brand" >
                    <img src={navimg} width="177" height="30" alt=""/>
                </a>
            </nav>
        </div>
    )
}
}
export default IconNav;
