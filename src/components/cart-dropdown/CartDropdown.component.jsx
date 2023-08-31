import { useContext } from 'react'

import { CartContext } from '../../context/Cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/CartItem.component'

import './CartDropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown
