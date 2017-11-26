import React from 'react';
import lights from './backgrounds/Lime-wedge.png';
import Layer from './Layer';

const LimeWedge = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} blend="overlay" />
}

export default LimeWedge;