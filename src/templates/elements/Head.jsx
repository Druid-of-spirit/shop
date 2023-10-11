import React, { useState } from 'react';
import classes from './head.module.scss';
import Call from '../../components/Call';
import DeliveryHead from '../../components/Head/DeliveryHead';
import ListHead from '../../components/Head/ListHead';
import Login from '../../components/Head/Login';
import Basket from '../../components/Head/Basket';
import logo from '../../assets/logo.png';



const Head = () => {
    const [basket, setBasket] = useState([])

    const timeM = 10
    const moscow = "Москва"
    return ( 
        <div className={classes.head}>
            <div className='container'>
                <div className={classes.headInfo}>
                    <div className={classes.headInfoTop}>
                        <a><img src={logo} alt="" /></a>
                        <DeliveryHead
                        timeM = {timeM}
                        moscow = {moscow}
                        />
                        <Call
                        reverse={classes.reverse}
                        />
                    </div>
                    <div className={classes.headInfoBottom}>
                        <ListHead />
                        <Login />
                        <Basket />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Head;