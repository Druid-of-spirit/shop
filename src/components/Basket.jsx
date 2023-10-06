import React from 'react';
import classes from './basket.module.scss';
const Basket = () => {
    return ( 
        <div className={classes.basket}>
            <p>Корзина</p>
            <p>|</p>
            <p>1</p>
        </div>
    );
}

export default Basket;