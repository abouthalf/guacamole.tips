import React from 'react';
import lights from './backgrounds/Four-Limes.png';
import Layer from './Layer';

const FourLimes = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default FourLimes