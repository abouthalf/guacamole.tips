import React from 'react';
import night from './backgrounds/Night.jpg';
import Layer from './Layer';

const Night = ({hide}) => {
    let h = !!hide;
    return <Layer image={night} hide={h} transition="day-to-night" />
}

export default Night;