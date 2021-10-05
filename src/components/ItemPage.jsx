import { useContext, useState } from "react"
import Modal from 'react-modal'
import ItemContex from "../contex/ItemContex"
import { editCart } from "../actions/items"
import { Button, ButtonGroup } from "@mui/material"

const ItemPage = (props) => {
    const [numItem, setNumItem] = useState(1)
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const {cartItems, dispatch} = useContext(ItemContex)

    const handleOpenItem = () => {
        setModelIsOpen(true)
        setNumItem(1)
    }

    const handleCloseItem = () => {
        setModelIsOpen(false)
        setNumItem(1)

    }

    const handleAddToCart = (item) => {
        if(numItem === 0) {
            return 
        }
        //If item exists in cart:
        const itemExists = cartItems.find((cartItem) => cartItem.id === item.id)
        if(itemExists) {
            let amount = itemExists.amount + numItem
            return(
                dispatch(editCart({type:'UPDATE_CART', item, numItem: amount }))
            )

        }

        //If item doesnt exists in cart:
        dispatch(editCart({type:'ADD_TO_CART', item, numItem }))
    }

    return(
        <div className="item_page" >
        <Button color="inherit" variant="outlined" onClick={handleOpenItem}>Open</Button>
        <Modal
            isOpen={modelIsOpen}
            onRequestClose={handleCloseItem}
            contentLabel="Selected Option"
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="modal"
        >
            <div>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <p>{`${props.item.price}$`}</p>
                <img src={props.item.img} alt="some info" style={{width: '100px', height: '100px'}}/>
            </div>
            <div>
                <div>
                    <p>{numItem}</p>
                </div>
                <ButtonGroup color="inherit" variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setNumItem(numItem + 1)}>+</Button>
                    <Button onClick={() => numItem > 0 && setNumItem(numItem - 1)}>-</Button>
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup color="inherit" variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => handleAddToCart(props.item)}>Add to cart</Button>
                    <Button onClick={handleCloseItem}>Continue Shopping</Button>
                </ButtonGroup>
            </div>

        </Modal>
        </div>
    )
}

export default ItemPage