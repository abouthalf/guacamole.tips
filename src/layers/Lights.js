import React from 'react';
import lights from './backgrounds/Lights.png';
import Layer from './Layer';

const Lights = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-on" />
}

export default Lights;