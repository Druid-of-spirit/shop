import React from 'react';
import classes from './basket.module.scss';
const Basket = () => {
    return ( 
        <button className={classes.basket}>
            <p>Корзина</p>
            <p>|</p>
            <p>1</p>
        </button>
    );
}

export default Basket;