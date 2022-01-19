import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        const { data }  = this.props;

        return (
            <div>
                <h3>Header</h3>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/counter">Counter</Link>
                </div>
                <div>
                    <Link to="/form">Form</Link>
                </div>    
                <div>
                    <Link to="/table">Table</Link>
                </div>    
                <div>
                    <Link to="/about">About</Link>
                </div>    
            </div>
        );
    }
}

export default Header;