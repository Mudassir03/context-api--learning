import React, { useContext } from 'react'
import { Cart } from '../Context'
// import Cart from './Cart'

function SingleProduct({prod}) {
  const {cart, setCart}=useContext(Cart)
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.title} />
        <div className='productdis'>
            <span>{prod.title.substring(0,28)}...</span>

            <p>$ {prod.price}</p>
            {cart.includes(prod)?(<button className='add' onClick={()=>{setCart(cart.filter(c=>c.id!==prod.id))}}> remove from cart</button>):(<button className='add' onClick={()=>{setCart([...cart,prod])}}> add to cart</button>)}


        </div>
        
        
        

    </div>
  )
}

export default SingleProduct