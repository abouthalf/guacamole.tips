import React from 'react';
import night from './backgrounds/Night.jpg';
import Layer from './Layer';

const Night = ({hide, handleAnimationIteration}) => {
    let h = !!hide;
    return <Layer image={night} 
        hide={h} 
        transition="day-to-night" 
        handleAnimationIteration={handleAnimationIteration} />
}

export default Night;