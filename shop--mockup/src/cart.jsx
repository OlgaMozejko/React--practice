import React from "react"
import CartItem from './cartitem'
import { Context } from './context'
import cartDivider from './assets/divider_cart.png'

function Cart() {

    const [buttonTXT, setButtonTXT] = React.useState('Place Order')
    const [order, setOrder] = React.useState(false)

    const {cartItems, EmptyCart} = React.useContext(Context)

    const price = cartItems.length * 6.99
    const totalPrice = price.toLocaleString("en-US", {style: "currency", currency: "EUR"})

    function placeOrder() {
        setButtonTXT('Odering...')
        setTimeout(() => {
            displayConfirm()
            setButtonTXT('Place Order')
            EmptyCart()
        }, 2000)
    }

    function displayConfirm() {
        setOrder(true)
        setTimeout(() => setOrder(false), 2000)
    }

    const cartElements = cartItems.map(item => {
        return(
            <div key={item.id}>
            <CartItem item={item} />
            <img className="divider" alt="divider" src={cartDivider} />
            </div>
        )
    })

    return(
        <section className="cart--section">
            <h1 className="cart--title">Shopping Cart</h1>
            {cartElements}
            <p className="total--cost">Total: {totalPrice}</p>

            {order &&
                <div className="order--conformation">
                    <p>order placed!</p>
                </div>
            }

            {cartItems.length > 0 &&
            <div className="order--button">
                <button onClick={placeOrder}>{buttonTXT}</button>
            </div>}

        </section>
    )
}

export default Cart