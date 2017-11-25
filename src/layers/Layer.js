import React, { Component } from 'react';
import './Layer.css';

export default class Layer extends React.Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="Layer" style={{backgroundImage: `url(${this.props.image})`}}>
            {this.props.children}
        </div>
    }
}

Layser.defaultProps = {
    image: '//0'
}