import React from 'react';
import night from './backgrounds/Night.jpg';
import Layer from './Layer';

const Night = ({hide, handleAnimationIteration, handleAnimationStart}) => {
    let h = !!hide;
    return <Layer image={night} 
        hide={h} 
        transition="day-to-night" 
        handleAnimationIteration={handleAnimationIteration}
        handleAnimationStart={handleAnimationStart} />
}

export default Night;