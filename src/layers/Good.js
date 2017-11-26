import React from 'react';
import lights from './backgrounds/Good.png';
import Layer from './Layer';

const Good = ({hide}) => {
    let h = !!hide;
    return <Layer image={lights} hide={h} transition="lights-on" blend="multiply" />
}

export default Good;