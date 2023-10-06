import React from 'react';
import classes from './listHead.module.scss';
const ListHead = () => {
    return ( 
        <div className={classes.list}>
            <a>Паста</a>
            <a>Супы</a>
            <a>Салаты</a>
            <a>Антипасти</a>
            <a>Напитки</a>
            <a>Десерты</a>
            <a>Бакалея</a>
            <a>Акции</a>
            <a>Комбо</a>
            <a>Контакты</a>
        </div>
    );
}

export default ListHead;