import React from 'react';
import lights from './backgrounds/Pitted-avocados.png';
import Layer from './Layer';

const PittedAvocados = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} blend="overlay" />
}

export default PittedAvocados;