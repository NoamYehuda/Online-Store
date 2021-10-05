import { v4 as uuidv4 } from 'uuid';
import cups from '../images/kitchen/glass.jpg'
import wine from '../images/kitchen/wine-1585337_1920.jpg'
import cutlery from '../images/kitchen/cutlery-554069_1920.jpg'
import saltAndPapper from '../images/kitchen/spices.jpg'
import mortarAndPestle  from '../images/kitchen/mortar and pestle.jpg'
import coffeeSet from '../images/kitchen/coffee set.jpg'

const kitchenItems = [
    {
        id: uuidv4(),
        title: 'Salt & Papper Set',
        description: 'Salt & Papper mill grinder glass set.',
        price: 9,
        img: saltAndPapper,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Glass Cups',
        description: 'Set of 5 glass cups',
        price: 12,
        img: cups,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Wine Glasses',
        description: 'Set of 5 wine glasses',
        price: 20,
        img: wine,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Cutlery',
        description: 'Set of 30 pieces of silver cutlery',
        price: 55,
        img: cutlery,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Mortar & Pestle',
        description: 'Black 17cm granite Mortar & Pestle',
        price: 45,
        img: mortarAndPestle,
        amount: 0
    },
    {
        id: uuidv4(),
        title: 'Coffee Set ',
        description: '3 pices coffee set',
        price: 35,
        img: coffeeSet,
        amount: 0
    }

]

export default kitchenItems