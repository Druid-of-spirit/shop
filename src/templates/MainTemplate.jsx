import React from 'react';
import Head from './elements/Head';
import MainPage from './elements/MainPage';
import Footer from './elements/Footer';
import classes from './mainTemplate.module.scss';
const MainTemplate = () => {
    return ( 
        <div className={classes.box}>
            <Head/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default MainTemplate;