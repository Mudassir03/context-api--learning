import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleProduct from './SingleProduct';



function Home() {


 
    const [Data, setData] = useState([]);
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");  
      setData(res.data);
          }; 
    useEffect(() => {
      getData();
    },[]);
   
    
  
  return (
    <div>
        {Data.map((item)=>(
            <SingleProduct key={item.id} prod={item}  />
        ))}
    </div>
   
  )
}

export default Home