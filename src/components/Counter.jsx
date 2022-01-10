import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

   
    
    render() {
        return (
            <div>
               <Button value={this.props.sanjar} title="Increment" handler={this.props.increment} style={{color: "blue"}} />
 
               <Button value={this.props.sanjar} title="Decrement" style={{color: 'red'}} handler={this.props.decrement} />
            </div>
        );
    }
}

export default Counter;