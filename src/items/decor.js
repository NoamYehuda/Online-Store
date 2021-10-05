import { v4 as uuidv4 } from 'uuid';
import basket from '../images/decor/basket.jpg'
import macrame from '../images/decor/macrame.jpg'
import pampas from '../images/decor/pampas.jpg'
import bamboBasket from '../images/decor/straw basket.jpg'
import vaseSet from '../images/decor/vase set.jpeg'
import vase from '../images/decor/vase.jpg'



const decorItems = [
    {
        id: uuidv4(),
        title: 'Laundry Basket',
        description: 'Bamboo laundry basket ',
        price: 15,
        img: basket,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Macrame',
        description: 'Handmade macrame wall',
        price: 45,
        img: macrame,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Pampas',
        description: '8 pices of pampas ',
        price: 10,
        img: pampas,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Bamboo Sotrage Basket',
        description: 'Handmade bamboo storage basket',
        price: 21,
        img: bamboBasket,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Plant Stand',
        description: 'Black plant stand',
        price: 75,
        img: vaseSet,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Handmade Vase',
        description: '3 beautiful handmade vase ',
        price: 55,
        img: vase,
        amount: 0
    }

]

export default decorItems