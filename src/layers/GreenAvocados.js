import React from 'react';
import lights from './backgrounds/Green-avocados.png';
import Layer from './Layer';

const GreenAvocados = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default GreenAvocados