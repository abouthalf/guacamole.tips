import React from 'react';
import lights from './backgrounds/Microwave.png';
import Layer from './Layer';

const Microwave = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-on" blend="multiply" />
}

export default Microwave;