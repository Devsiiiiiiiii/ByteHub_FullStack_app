import React, { useEffect } from 'react'
import { Cart, Header, OLeftSection, ORightSection, OutletHome, } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProducts } from '../context/actions/productsActions'
import { getAllProducts } from '../api'



const Outlets = () => {
  const products = useSelector((state) => state.products )
  const isCart = useSelector((state) => state.isCart)  

  const dispatch = useDispatch();

    useEffect(() =>{
      if (!products) {
        getAllProducts().then((data) => {
          dispatch(setAllProducts(data));
        })
      }
    }, [])



  return (
    
    <div className='w-screen h-screen flex flex-col items-center mt-40 sm:flex-col md:flex-row'>
    <OLeftSection/>
    <ORightSection/>
    {isCart && <Cart/>}
  </div>
  
  
  )
}

export default Outlets
