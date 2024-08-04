import React from 'react';
import spiner from '../asset/Loading Animations.gif'
const Loader = () => {
    return (
        <div>
            <img src={spiner} alt="img" />
            <h1>Loding...</h1>
        </div>
    );
};

export default Loader;