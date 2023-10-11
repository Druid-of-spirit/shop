import React from 'react';
import classes from './priceProduct.module.scss';
const PriceProduct = ({price, customStyle}) => {
    return ( 
        <div className={`${classes.priceProduct} ${customStyle}`}>
            <p>от {price} ₽</p>
        </div>
    );
}

export default PriceProduct;