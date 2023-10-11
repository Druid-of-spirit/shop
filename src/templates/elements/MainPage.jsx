import React from 'react';
import classes from './mainPage.module.scss';
import SlideMenu from '../../components/SlideMenu';
import NewProducts from '../../components/NewProducts';
import MiniProduct from '../../components/MiniProduct';
import Products from '../../components/Products';
import Product from '../../components/Product';
import EventList from '../../components/EventList';
import Event from '../../components/Event';

import miniPizza from '../../assets/products/miniPizza.png';
import pizzaNew1 from '../../assets/products/pizzaNew1.png';
import pizzaNew2 from '../../assets/products/pizzaNew2.png';
import pizza1 from '../../assets/products/pizza1.png';
import pizza2 from '../../assets/products/pizza2.png';
import cake from '../../assets/products/cake.png';
import EventMain from '../../components/EventMain';
import Events from '../../components/Events';
import DeliveryInfo from '../../components/DeliveryInfo';
const MainPage = () => {
    const newProductList = [ // Исскуственный список новинок
        {id: '001',
        name: 'Карбонара M',
        price: '100',
        image: miniPizza},
        {id: '002',
        name: 'Карбонара L',
        price: '300',
        image: miniPizza},
        {id: '003',
        name: 'Карбонара XL',
        price: '500',
        image: miniPizza},
        {id: '004',
        name: 'Карбонара XXL',
        price: '700',
        image: miniPizza},
    ]
    const prooductlist = [
        {id: '005',
        name: 'С креветками и трюфелями M',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: '600',
        image: pizzaNew1},
        {id: '006',
        name: 'С креветками и трюфелями L',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.700 г',
        price: '800',
        image: pizzaNew2},
        {id: '007',
        name: 'С креветками и трюфелями XL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1000 г',
        price: '1000',
        image: pizza1},
        {id: '008',
        name: 'С креветками и трюфелями XXL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1200 г',
        price: '1200',
        image: pizza2},
        {id: '009',
        name: 'С креветками и трюфелями M',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: '600',
        image: pizzaNew1},
        {id: '010',
        name: 'С креветками и трюфелями L',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.700 г',
        price: '800',
        image: pizzaNew2},
        {id: '011',
        name: 'С креветками и трюфелями XL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1000 г',
        price: '1000',
        image: pizza1},
        {id: '012',
        name: 'С креветками и трюфелями XXL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1200 г',
        price: '1200',
        image: pizza2},
        {id: '013',
        name: 'С креветками и трюфелями M',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: '600',
        image: pizzaNew1},
        {id: '014',
        name: 'С креветками и трюфелями L',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.700 г',
        price: '800',
        image: pizzaNew2},
        {id: '015',
        name: 'С креветками и трюфелями XL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1000 г',
        price: '1000',
        image: pizza1},
        {id: '016',
        name: 'С креветками и трюфелями XXL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1200 г',
        price: '1200',
        image: pizza2},
        {id: '017',
        name: 'С креветками и трюфелями M',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: '600',
        image: pizzaNew1},
        {id: '018',
        name: 'С креветками и трюфелями L',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.700 г',
        price: '800',
        image: pizzaNew2},
        {id: '019',
        name: 'С креветками и трюфелями XL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1000 г',
        price: '1000',
        image: pizza1},
        {id: '020',
        name: 'С креветками и трюфелями XXL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1200 г',
        price: '1200',
        image: pizza2},
        {id: '021',
        name: 'С креветками и трюфелями M',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
        price: '600',
        image: pizzaNew1},
        {id: '022',
        name: 'С креветками и трюфелями L',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.700 г',
        price: '800',
        image: pizzaNew2},
        {id: '023',
        name: 'С креветками и трюфелями XL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1000 г',
        price: '1000',
        image: pizza1},
        {id: '024',
        name: 'С креветками и трюфелями XXL',
        description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.1200 г',
        price: '1200',
        image: pizza2},
    ]
    const eventList = [
        {id: '025',
        image: cake
        },
        {id: '026',
        image: cake
        },
        {id: '027',
        image: cake
        },
        {id: '028',
        image: cake
        },
        {id: '029',
        image: cake
        },
    ]
    const addToCartAction = id => {
        const click = () => {
            console.log(id)
        }
        return click
    }
    
    const addToCart = (id) => {
        console.log(id)

    }
    return ( 
        <div className={classes.mainPage}>
            <div className='container'>
                <SlideMenu />
                <NewProducts>
                    {newProductList.map(item => (
                        <MiniProduct
                        key={item.id}
                        {...item}
                        />
                    ))}
                </NewProducts>
                <Products>
                    {prooductlist.map(item => (
                        <Product
                        addToCart = {addToCart}
                        addToCartAction = {addToCartAction}
                        key={item.id}
                        {...item}
                        />
                    ))}
                </Products>
                <EventList>
                    <EventMain
                        {...eventList[0]}
                    />
                    <Events>
                        {eventList.slice(1).map(item => (
                            <Event
                            key={item.id}
                            {...item}
                            />
                        ))}
                    </Events>
                </EventList>
                
            </div>
            <DeliveryInfo />
        </div>
    );
}

export default MainPage;