import React from 'react';
import lights from './backgrounds/Garlic.png';
import Layer from './Layer';

const Garlic = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-off" />
}

export default Garlic