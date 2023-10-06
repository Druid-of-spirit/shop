import React from 'react';
import classes from './footer.module.scss';
import Call from '../../components/Call';
import Contacts from '../../components/Contacts';



const Footer = () => {
    return ( 
        <div className={classes.footer}>
            <div className='container'>
                <Contacts>
                    <Call
                    reverse={classes.reverse}
                    />
                </Contacts>
            </div>
        </div>
    );
}

export default Footer;