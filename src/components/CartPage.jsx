import { useContext } from "react"
import ItemContex from "../contex/ItemContex"
import { removeItem, editCart, removeAll } from "../actions/items"
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import {  Button, ButtonGroup, IconButton } from "@mui/material";

const CartPage = () => {
    const { cartItems, dispatch} = useContext(ItemContex)

    const handleAdd = (item) => {
        let amount = item.amount + 1
        return(
            dispatch(editCart({type:'UPDATE_CART', item, numItem : amount }))
        )
    }

    const handleDecrease = (item) => {
        if( item.amount > 1 ) {
            let amount = item.amount - 1
            return(
                dispatch(editCart({type:'UPDATE_CART', item, numItem : amount }))
            )
        } else {
            return dispatch(removeItem(item))
        }

    }

    const handleParchase = () => {
        swal({
            title: "Purchase completed successfully!",
            icon: "success",
            button: "Ok",
            className:'alert_purchase'
          });
        return dispatch(removeAll())
    }

    const totalAmount = () => {
        let totalAmount = 0
        cartItems.forEach(item => {
            totalAmount = totalAmount + (item.amount * item.price)
        });

        return totalAmount
    }





    return (
        <div>
            <h1 className="cart">Cart</h1>

            {cartItems.map((item, index) => (
                <div className="cart_item" key={index}>
                    <div className="header_item">
                        <h3>{item.title}</h3>
                        <IconButton aria-label="delete" onClick={() => dispatch(removeItem(item))}>
                            <DeleteIcon />
                        </IconButton>
                    </div>

                    <div className="content_item">
                        <img src={item.img} alt="some info" style={{width: '100px', height: '100px'}}/>
                        <p>{item.description}</p>
                        <div>
                        <p>Amount: {item.amount}</p>
                            <ButtonGroup color="inherit" variant="outlined" aria-label="outlined button group">
                                <Button onClick={() => handleAdd(item)}>+</Button>
                                <Button onClick={() => handleDecrease(item)}>-</Button>
                            </ButtonGroup>
                        </div>
                        <p>{`${item.price * item.amount}$`}</p>
                    </div> 
                </div>
            ))}
            <div className="cart_footer">
                <h3>Total: {totalAmount()} $</h3>
                <Button variant="outlined" color="inherit" onClick={handleParchase} disabled={cartItems.length === 0} >Purchase now!</Button>
            </div>
        </div>

    )
}

export default CartPage