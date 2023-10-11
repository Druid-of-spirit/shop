import React from 'react';
import classes from './eventMain.module.scss';
const EventMain = ({...item}) => {
    return ( 
        <div className={classes.eventMain}>
            <img id={item.id} src={item.image} alt="" />
        </div>
    );
}

export default EventMain;