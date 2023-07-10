import React from 'react'
import { Cart, Header } from '../components'
import { useSelector } from 'react-redux'

const Services = () => {
  const isCart = useSelector((state) => state.isCart)
  return (
     

    <div>
      <Header/>
      {isCart && <Cart/>}
    </div>
  )
}

export default Services
