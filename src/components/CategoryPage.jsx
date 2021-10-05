import Item from "./Item"
import kitchenItems from "../items/kitchen";
import furnitureItems from "../items/furniture"
import decorItems from '../items/decor'


const CategoryPage = (props) => {

    const items = [
        {
            title: 'kitchen',
            items: kitchenItems
        },
        {
            title: 'furniture',
            items: furnitureItems
        },
        {
            title: 'decorations',
            items: decorItems
        }
    ]

    const category = items.find((item) => item.title.toLowerCase() === props.match.params.category )
    console.log( props.match.params.category);
    return (
            <div className="items_cards">
                {category.items.map((item, index) => {
                    return(
                        <Item key={index} item={item}/>
                    )
                    
                })}
            </div>
    )
}

export default CategoryPage