import React from "react"
import { Context } from './context'

function CartItem(props) {

    const { RemoveFromCart } = React.useContext(Context)

    return(
        <div className="cart--item">
            <i className="ri-delete-bin-5-fill trash" onClick={() => RemoveFromCart(props.item)}></i> 
            <img src={props.item.url} alt="photo" className="cart--img" />
            <p className="price--text">€ 6.99</p>

        </div>
    )
}

export default CartItem