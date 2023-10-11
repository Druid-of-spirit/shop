import React from 'react';
import classes from './eventList.module.scss';
const EventList = ({children}) => {
    return ( 
        <div className={classes.eventList}>
            <h2>Наши <span>акции</span></h2>
            <div className={classes.flex}>
                {children}
            </div>
            <button>Все акции</button>
        </div>
    );
}

export default EventList;