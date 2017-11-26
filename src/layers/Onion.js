import React from 'react';
import lights from './backgrounds/Onion.png';
import Layer from './Layer';

const Onion = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default Onion;