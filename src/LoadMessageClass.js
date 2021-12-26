import React, { Component } from 'react'
import axios from 'axios'
const INITIAL_MESSAGE = '';

export default class LoadMessageClass extends Component {

constructor(props){
super(props);

this.state = {
    message : ""
}
}   

componentDidMount(){
    this.loadMessage();
}

render() {
    return <h1>{this.state.message}</h1>
  }

    loadMessage = async () =>{
        try{
            const response = await axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
            this.setState({ message: response.data });
        }
        catch(e){
            this.setState({ message: e.message });
        }
    }

    
}
