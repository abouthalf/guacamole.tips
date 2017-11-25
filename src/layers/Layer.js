import React, { Component } from 'react';
import './Layer.css';

export default class Layer extends Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="Layer" 
                hide={this.props.hide}
                style={{backgroundImage: `url(${this.props.image})`}}>
            {this.props.children}
        </div>
    }
}

Layser.defaultProps = {
    image: '//0',
    hide: false
}