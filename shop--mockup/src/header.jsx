import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from './context'
import logo from './assets/logo.png'

function Header() {

    const { cartItems } = React.useContext(Context)

    const cartClasses = cartItems.length > 0 ? 
    'ri-shopping-cart-2-fill ri-fw ri-2x icon--head' :
    'ri-shopping-cart-2-line ri-fw ri-2x icon--head'

    return(
        <header className="header">
            <Link to={'/'} className='logo--links links'>
            <img className='logo' alt='logo' src={logo} />
            <p className="title">Pic Some Shop</p>
            </Link>
            <Link to={'/cart'} className='links'>
            <i className={cartClasses}></i>
            </Link>
        </header>
    )
}

export default Header