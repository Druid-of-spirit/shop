import React from 'react';
import classes from './deliveryHead.module.scss';
import Widget from './Widget';
const DeliveryHead = ({timeM, moscow}) => {
    console.log(moscow)
    const [city, setCity] = React.useState(moscow);
    const [time, setTime] = React.useState(timeM);
    const change = () => {
        if (city === 'Москва') {
            setCity('Санкт-Петербург');
            setTime('20');
        } else if (city === 'Санкт-Петербург') {
            setCity('Казань');
            setTime('16');
        }
        else {
            setCity('Москва');
            setTime('31');
        }
    }
    return ( 
        <div className={classes.delivery}>
            <p>Доставка пасты <span onClick={change}>{city}</span></p>
            <div className={classes.deliveryInfo}>
                <Widget />
                <p>Время доставки <span>{`от ${time} мин `}</span></p>
            </div>
        </div> 
    );
}
export default DeliveryHead;