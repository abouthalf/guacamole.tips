import React from 'react';
import lights from './backgrounds/Cut.png';
import Layer from './Layer';

const Cut = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-on" blend="multiply" />
}

export default Cut;