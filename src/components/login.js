import React,{Component} from 'react'

import {Router,HashRouter,withRouter,Redirect} from 'react-router-dom'

import {Button,
        Card,      
        CardTitle,
        CardText,
        CardBody,
        Input,
      }from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import Rapinfo from './tablepage'
import "../css/index.css"

const sectionStyle = {
  width:'500px',
  height:'309px',
  position:'absolute',
  left:0,
  top:0,
  right:0,
  bottom: 0,
  margin:' auto',
}


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
          un : "",
          pwd : "",
          islogin:false
        };
        this.handlUnameChange = this.handlUnameChange.bind(this);
        this.handlePwdChange=this.handlePwdChange.bind(this);
        this.sinIn=this.sinIn.bind(this);
        this.getConnect = this.getConnect.bind(this);
    }

handlUnameChange(e){
  this.setState({un:e.target.value})
}
handlePwdChange(e){
  this.setState({pwd:e.target.value})
}

sinIn()
{
this.getConnect();
}
 
getConnect(){
  //var formdata={user:this.state.un,password:this.state.pwd}
  var config = {
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  }
  axios.post('http://10.140.161.209:3912/userlogin',
  config,
  {data: {
    user:this.state.un,
    password:this.state.pwd
  }},
    {
    params:{
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
      "async": true,
      "crossDomain": true,},
      
    dataType:'JSONP',}
)
.then(response =>{
  console.log(response.data)
  this.setState({islogin:response.data.success})
  if(this.state.islogin)
    {
      //window.alert('success');
      this.props.history.push('/rapinfo')
    }
    else window.alert('Wrong usename or password')
})
.catch(error => {
  console.log(error)
});
}

render() {
      return (
    <div calss="container">
        <Card style={sectionStyle} >
        <CardBody>
          <CardTitle style={{fontSize:"30px", fontweight:'normal' }}>RAP Source Manager</CardTitle>
            <br></br>
          <CardText>
              <Input  id="user" 
                      placeholder='username'  
                      onChange= {this.handlUnameChange}/>
                      <br></br>
              <Input  id="password"
                    type= "password" 
                    placeholder="Password" 
                    onChange = {this.handlePwdChange} 
                  /> 
                  <br></br>
                <Button color="secondary"
                        size='small'
                        block
                        content= 'submit'
                        onClick = {this.sinIn} >
                        Submit</Button>
          </CardText>
        </CardBody>
        </Card>
    </div>
      );
    }
  }
export default Login;