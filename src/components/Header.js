import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context'

function Header() {
  const {cart}=useContext(Cart)
  return (
    <div className='header'>
      
      <h2>context api learning</h2>
      <ul><li>
      <Link className='Link' to='/'>Home</Link>
      </li>
      <li>
      <Link className='Link' to='/cart'>Cart({cart.length})</Link>
      </li>
      </ul>
     
    </div>
  )
}

export default Header