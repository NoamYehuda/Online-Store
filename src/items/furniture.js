import { v4 as uuidv4 } from 'uuid';
import table from '../images/furniture/table.jpg'
import couch from '../images/furniture/living-room sofa.jpg'
import gardenSet from '../images/furniture/garden-set.jpg'
import chair from '../images/furniture/chair.jpg'

const furnitureItems = [
    {
        id: uuidv4(),
        title: 'Dining Table Set',
        description: '3-piece Dining Set',
        price: 400,
        img: table,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Couch',
        description: '3 seater sofa',
        price: 940,
        img: couch,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Table Garden Set',
        description: '3 pices of garden furniture ',
        price: 468,
        img: gardenSet,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Modern Chair',
        description: 'Comfortable wood chair for your favorite spot',
        price: 280,
        img: chair,
        amount: 0
    }

]

export default furnitureItems