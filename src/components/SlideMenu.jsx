import React, { useState } from 'react';
import classes from './slideMenu.module.scss';
import slide1 from '../assets/slideMenu/slide1.png';
import slide2 from '../assets/slideMenu/slide2.png';
import slide3 from '../assets/slideMenu/slide3.png';
import slide4 from '../assets/slideMenu/slide1.png';

const slides = [slide1, slide2, slide3, slide4, slide3, slide2];
const SlideMenu = () => {
    const [slide, setSlide] = useState(slides);
    const slideBtnLeft = () => {
        const newSlides = [...slide]; // Создаем копию текущего состояния
        const imageLast = newSlides.pop();
        newSlides.unshift(imageLast);
        setSlide(newSlides);
    }
    const slideBtnRight = () => {
        const newSlides = [...slide]; // Создаем копию текущего состояния
        const imageFirst = newSlides.shift();
        newSlides.push(imageFirst);
        setSlide(newSlides);
    }
    
    return ( 
        <div className={classes.slideMenu}>
            <button onClick={slideBtnLeft} className={classes.slideBtnLeft}></button>
            <button onClick={slideBtnRight} className={classes.slideBtnRight}></button>
            <div className={classes.scroll}>
                <div className={classes.slideBackLeft}><img src={slide[0]} alt="" /></div>
                <div className={classes.slideFrontLeft}><img src={slide[1]} alt="" /></div>
                <div className={classes.slideFrontRight}><img src={slide[2]} alt="" /></div>
                <div className={classes.slideBackRight}><img src={slide[3]} alt="" /></div>
            </div>
        </div>
    );
}

export default SlideMenu;