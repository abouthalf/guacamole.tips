import React from 'react';
import lights from './backgrounds/Half-limes.png';
import Layer from './Layer';

const HalfLime = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default HalfLime;