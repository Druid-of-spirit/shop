import React from 'react';
import classes from './product.module.scss';
import BtnAddProduct from '../ui/BtnAddProduct';
import PriceProduct from '../ui/PriceProduct';

const Product = ({addToCart, ...item}) => {
    return ( 
        <div className={classes.product}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className={classes.flex}>
                <PriceProduct
                price = {item.price}
                />
                <BtnAddProduct
                addToCart = {() => addToCart(item.id)}
                />
            </div>
        </div>
    );
}

export default Product;