
import React from 'react';
import { Table, Button ,ButtonGroup} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import Login from '../components/login'

var count=0;

var axios = require('axios');

class RapInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rapStr: '',
            isLoading:true,
        };
        this.click = this.click.bind(this)
    }

    getRapInfo = ()=>{
        axios.post(' http://10.140.161.209:3912/find/rapinfo',{
            headers:{
                "Content-Type": "application/json",
                },
              params:{
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
                "async": true,
                "crossDomain": true,
                }, 
              dataType: 'JSONP'
        })
            .then((res) => {
                res.data=JSON.parse(res.data);
                this.setState({rapStr:res.data});   
                console.log(res.data)
              }) 
              .catch((err)=>{
                this.setState({rapStr: err});
              });
              count++;
    }

    click() {
        if(this.state.isLoading) {
            this.getRapInfo();
            this.timerID = setInterval(this.getRapInfo, 2000);
        } else {
            clearInterval(this.timerID);
            count = 0;
        }
        this.setState({isLoading: !this.state.isLoading});
    }

    render() {
        let bgColor = this.state.isLoading? "#CEDEE8":"#3599DA"
        return(
            <div class="card" >
                <div class ="card-body">
                <h3 class="card-title">RapInformation</h3>
                <div>
                <Button style={{backgroundColor:bgColor,border :'none' ,outline:'none'}} block size="sm" onClick={this.click}>{this.state.isLoading ? 'start': 'stop '}</Button>
            <Table responsive>
                <thead>
                <tr>
                <th>#</th>
                    <th>RAP_IP</th>
                    <th>RF_num</th>
                    <th>RFtype</th>
                    <th>BTStype</th>
                    <th>Options</th>
                    <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">1</th>
                <th>{this.state.rapStr.RAP_IP}</th>
                <th>{this.state.rapStr.RF_num}</th>
                <th>{this.state.rapStr.RFtype}</th>
                <th>{this.state.rapStr.BTStype}</th>
                <th style = {{"width":"190px"}}> 
                                <ButtonGroup size="sm">  
                                    <Button>Stop</Button>
                                    <Button>Restart</Button>
                                    <Button>Update</Button>
                                </ButtonGroup></th>
                </tr>
                </tbody>
            </Table>
            </div>
        </div>
        </div>
        )
    }
}

export default RapInfo;
