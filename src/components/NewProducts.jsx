import React from 'react';
import classes from './newProducts.module.scss';

const NewProducts = ({children}) => {
    return ( 
        <div className={classes.newProducts}>
            <h2>Новинки</h2>
            <div className={classes.products}>
                {children}
            </div>
        </div>
    );
}

export default NewProducts;