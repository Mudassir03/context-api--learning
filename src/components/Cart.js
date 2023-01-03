import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';




function Cartpage() {
  const [total, setTotal]=useState();
  const {cart}=useContext(Cart)

useEffect(()=>{
  setTotal(cart.reduce((acc, curr)=>acc+Number(curr.price),0))
},[cart])
  return (
    <div>
      <h3>totle:{total}</h3>
      {cart.map((item)=>(
            <SingleProduct key={item.id} prod={item}  />
        ))}
    </div>
  )
}

export default Cartpage