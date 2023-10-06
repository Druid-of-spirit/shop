import React from 'react';
import classes from './widget.module.scss';
import logo from '../assets/widget/logo.png';
import rating from '../assets/widget/rating.png';

const Widget = () => {
    return (
        <div className={classes.widget}>
            <img src={logo} alt="" />
            <p>Яндекс еда</p>
            <img src={rating} alt="" />
        </div>
    
    );
}

export default Widget;