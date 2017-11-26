import React from 'react';
import lights from './backgrounds/Tomato.png';
import Layer from './Layer';

const Tomato = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default Tomato;