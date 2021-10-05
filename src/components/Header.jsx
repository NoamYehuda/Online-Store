import React, { useContext } from "react"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink, useHistory } from "react-router-dom";
import ItemContex from "../contex/ItemContex";
import { IconButton } from "@mui/material";

const Header = () => {
    const {numItemsInCart ,setNumItemsInCart ,cartItems} = useContext(ItemContex)

    const history = useHistory()
    let num = 0
    cartItems.forEach(item => {
        num = num + item.amount
        setNumItemsInCart(num)
    });


    const handleToCart = () => {
        history.push('/cart')
    }


    return (
        <div>
            <h1 className="header">Style Your Home</h1>
            <div className="bar_container">
                <div className="navbar">
                    <NavLink className="navbar_link" to="/" activeClassName="is-active" exact>Home</NavLink>
                    <NavLink className="navbar_link" to="/category-page/furniture" activeClassName="is-active">Furniture</NavLink>
                    <NavLink className="navbar_link" to="/category-page/kitchen" activeClassName="is-active" >Kitchen</NavLink>
                    <NavLink className="navbar_link" to="/category-page/decorations" activeClassName="is-active" >Decorations</NavLink>
                </div>
                <div className="cart_button">
                    <IconButton  onClick={handleToCart} aria-label="shoppingBasketIcon">
                        <ShoppingBasketIcon />
                        <span className="num_items">{cartItems.length > 0 ? numItemsInCart : 0}</span>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header