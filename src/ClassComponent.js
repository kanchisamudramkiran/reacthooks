import React, { Component } from 'react'

const INITIAL_STATE =0

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
          };
      }
      
      setName = name => {
        this.setState({ name });
      }
    
      setEmail = email => {
        this.setState({ email });
      }

    render() {
        return (
            <div>
              <input value={this.state.name} onChange={event => this.setName(event.target.value)} />
              <input value={this.state.email} onChange={event => this.setName(event.target.value)} />
    
            </div>
        )
    }
}
