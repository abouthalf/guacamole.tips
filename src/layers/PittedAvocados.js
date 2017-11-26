import React from 'react';
import lights from './backgrounds/Pitted-avocados.png';
import Layer from './Layer';

const PittedAvocados = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default PittedAvocados;