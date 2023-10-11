import React from 'react';
import classes from './miniProduct.module.scss';
import PriceProduct from '../ui/PriceProduct';

const MiniProduct = ({...item}) => {
    return ( 
        <div className={classes.product}>
            <img src={item.image} alt="" />
            <div className={classes.productInfo}>
                <p>{item.name}</p>
                <PriceProduct
                customStyle={classes.price}
                price={item.price}
                />
            </div>
        </div>
    );
}

export default MiniProduct;