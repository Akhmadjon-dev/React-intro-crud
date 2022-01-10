import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        const { data }  = this.props;

        return (
            <div>
                Header
                {/* <h3> */}
            </div>
        );
    }
}

export default Header;