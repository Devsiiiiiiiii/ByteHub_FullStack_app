import React from 'react'
import { Cart, Header } from '../components'
import { useSelector } from 'react-redux'

const AboutUs = () => {
  const isCart = useSelector((state) => state.isCart)
  return (
    <div>
      <Header/>
      {isCart && <Cart/>}
    </div>
  )
}

export default AboutUs
