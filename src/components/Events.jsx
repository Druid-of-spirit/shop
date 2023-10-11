import React from 'react';
import classes from './events.module.scss';
const Events = ({children}) => {
    return ( 
        <div className={classes.grid}>
            {children}
        </div>
     );
}
 
export default Events;