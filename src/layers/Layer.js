import React, { Component } from 'react';
import classnames from 'classnames';
import './Layer.css';
import {duration} from './const';

export default class Layer extends Component 
{
    render() {
        let c = classnames('Layer', this.props.transition);
        let styles = {
            backgroundImage: `url(${this.props.image})`,
            mixBlendMode: this.props.blend,
            animationDuration: `${duration}s`
        };
        return <div className={c} 
                hidden={this.props.hide}
                style={styles}
                onAnimationIteration={this.props.handleAnimationIteration}
                onAnimationStart={this.props.handleAnimationStart}>
            {this.props.children}
        </div>
    }
}

Layer.defaultProps = {
    image: '//0',
    hide: false,
    transition: '',
    blend: 'normal',
    handleAnimationIteration: function(){},
    handleAnimationStart: function() {}
}