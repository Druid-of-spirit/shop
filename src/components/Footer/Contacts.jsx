import React from 'react';
import classes from './contacts.module.scss';
import call from '../../assets/call.png';
import facebook from '../../assets/facebook.png';
import light from '../../assets/light.png';
import skype from '../../assets/skype.png';
import telegram from '../../assets/telegram.png';
import vk from '../../assets/vk.png';
import bigLogo from '../../assets/bigLogo.png';
import logo from '../../assets/logo.png';
import maestro from '../../assets/maestro.png';
import visa from '../../assets/visa.png';
import paypal from '../../assets/paypal.png';

const Contacts = ({children}) => {
    return ( 
        <div className={classes.grid}>
            <div className={classes.box1}>
                <img className={classes.logo} src={logo} alt="" />
                <div className={classes.box1Sub}>
                    <a className='bold' href="">Калорийность и состав</a>
                    <a className='bold' href="">Правовая информация</a>
                    <h2>Мы в соцсетях</h2>
                    <div className={classes.box1Social}>
                        <a href="">YouTube</a>
                        <a href="">Facebook</a>
                        <a href="">ВКонтакте</a>
                        <a href="">Instagram</a>
                        <p>Москва ул. Проспект</p>
                        <p>Вернадского 86В</p>
                    </div>
                </div>
            </div>
            <div className={classes.box2}>
                <h2>ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:</h2>
                <div className={classes.box2Social}>
                    <a><img src={call} alt="" /></a>
                    <a><img src={skype} alt="" /></a>
                    <a><img src={light} alt="" /></a>
                    <a><img src={telegram} alt="" /></a>
                    <a><img src={facebook} alt="" /></a>
                    <a><img src={vk} alt="" /></a>
                    <a><p>Написать нам</p></a>
                </div>
            </div>
            <div className={classes.box3}>
                <p>YaBao Все праав защищены © 2021</p>
                <img src={visa} alt="" />
                <img src={paypal} alt="" />
                <img src={maestro} alt="" />
            </div>
            {children}
            <img className={classes.imgAbs} src={bigLogo} alt="" />
        </div>
    );
}

export default Contacts;