import React, { Component } from 'react';
import classnames from 'classnames';
import './Layer.css';

export default class Layer extends Component 
{
    render() {
        let c = classnames('Layer', this.props.transition);
        let styles = {
            backgroundImage: `url(${this.props.image})`,
            mixBlendMode: this.props.blend
        };
        return <div className={c} 
                hidden={this.props.hide}
                style={styles}>
            {this.props.children}
        </div>
    }
}

Layer.defaultProps = {
    image: '//0',
    hide: false,
    transition: '',
    blend: 'normal'
}