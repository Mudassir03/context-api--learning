import React,{createContext, useState} from 'react'


export const Cart=createContext()

function Context({children}) {
    const [cart, setCart]=useState([])
  return (
    <div>
        <Cart.Provider value={{cart, setCart}}>
            {children}
        </Cart.Provider>

    </div>
  )
}

export default Context