import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button as StyledBtn} from '../style/components'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

        return (
            <button onClick={this.props.handler}>
                {this.props.title}
            </button>
        );
    }
}

Button.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    handler: PropTypes.func.isRequired
}

export default Button;