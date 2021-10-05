import ItemPage from "./ItemPage";

const Item = (props) => {
    return (
        
        <div className="item_card">
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <p>{`${props.item.price}$`}</p>
                <img src={props.item.img} alt="some info"/>
                <ItemPage  item={props.item} />
        </div>
        
    )
}

export default Item