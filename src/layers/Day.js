import React from 'react';
import day from './backgrounds/Day.jpg';
import Layer from './Layer';

const Day = ({hide}) => {
    let h = !!hide;
    return <Layer image={day} hide={h} />
}

export default Day;