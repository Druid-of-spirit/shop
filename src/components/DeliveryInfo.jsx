import React from 'react';
import classes from './deliveryInfo.module.scss';

import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import vector3 from '../assets/vector3.png';
import vector4 from '../assets/vector4.png';
const DeliveryInfo = () => {
    return ( 
        <div className={classes.deliveryInfo}>
            <div className='container'>
                <div className={classes.flex}>
                    <h2>Оплата и доставка</h2>
                    <div className={classes.info}>
                        <div className={classes.box}>
                            <div className={classes.imageBox}>
                                <img src={vector1} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.imageBox}>
                                <img src={vector2} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.imageBox}>
                                <img src={vector3} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.imageBox}>
                                <img src={vector4} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a1c1a1c0f2c9d8c4f8d0b1c0f2c9d8c4f8d0b1c0f2c9d8c4f8d0b1&source=constructor" width="100%" height='322' frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default DeliveryInfo;