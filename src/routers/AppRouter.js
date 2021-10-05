import React, { useReducer, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from "../components/CartPage";
import CategoryPage from "../components/CategoryPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ItemPage from "../components/ItemPage";
import NotFoundPage from "../components/NotFoundPage";
import ItemContex from "../contex/ItemContex";
import itemsReducers from "../reducers/itemsReducer";

const AppRouter = () => {
    const [cartItems, dispatch] = useReducer(itemsReducers, [] )
    const [numItemsInCart, setNumItemsInCart] = useState(0)

    return (
        <ItemContex.Provider value={{ numItemsInCart, setNumItemsInCart , cartItems , dispatch}}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/category-page/:category" component={CategoryPage}/>
                        <Route path="/category-page/:category/:item" component={ItemPage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </ItemContex.Provider>
    )
}


export default AppRouter