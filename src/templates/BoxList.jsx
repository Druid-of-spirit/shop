import React from 'react';
import Head from './elements/Head';
import Content from './elements/Content';
import Footer from './elements/Footer';
import classes from './boxList.module.scss';
const BoxList = () => {
    return ( 
        <div className={classes.box}>
            <Head/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default BoxList;