import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../api'
import { setAllProducts } from '../context/actions/productsActions'

const DBHome = () => {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch();

  
  useEffect(() => {
    if(!products){
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data))
      })
    }
  }, [])
  return (
    <div>
      HIii
    </div>
  )
}

export default DBHome
