import React from 'react';
import classes from './call.module.scss';
const Call = ({reverse}) => {
    return ( 
        <div className={`${classes.call} ${reverse}`}>
            <a href="tel:8 499 391-84-49">8 499 391-84-49</a>
            <button>Заказать звонок</button>
        </div>
    );
}

export default Call;