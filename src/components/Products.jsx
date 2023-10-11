import React from 'react';
import classes from './products.module.scss';
const Products = ({children}) => {
    return ( 
        <div className={classes.products}>
            <h2>Паста</h2>
            <div className={classes.grid}>
                {children}
            </div>
            
        </div>
    );
}

export default Products;