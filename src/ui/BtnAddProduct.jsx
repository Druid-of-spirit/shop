import React from 'react';
import classes from './btnAddProduct.module.scss';
const BtnAddProduct = ({addToCart}) => {
    return ( 
        <button onClick={addToCart} className={classes.btnAddProduct}>В корзину</button>
    );
}

export default BtnAddProduct;