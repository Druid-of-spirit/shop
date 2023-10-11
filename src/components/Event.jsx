import React from 'react';
import classes from './event.module.scss';
const Event = ({...item}) => {
    return ( 
        <div className={classes.event}>
            <img src={item.image} alt="" />
        </div>
    );
}
 
export default Event;