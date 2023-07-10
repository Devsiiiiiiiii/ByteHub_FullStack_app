import React, { useEffect, useState } from 'react'
import { Header, OrdersData } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../api';
import { setOrders } from '../context/actions/ordersAction';
const UsersOrder = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders)
  const [userOrders, setUserOrders] = useState(null)
  
  useEffect(() => {
    if(!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data))
        setUserOrders(data.filter((item) => item.userId === user?.user_id))


    })
    }else {
      
      setUserOrders(orders.filter(data => data.userId === user?.user_id))
    }

    
  }, [orders])

  return (
   
    <main className='w-screen min-h-screen flex items-center justify-start flex-col bg-white'>
      <Header/>

      <div className='w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24'>
      { userOrders?.length > 0 ? ( 
      <>
            {userOrders.map((item, i) => (
              <OrdersData key = {i} index = {i} data ={item} admin ={false}/>
            ))}
      
      </>
        ): (
      <> 
        <div className=' text-[72px] text-headingColor font-bold items-center '> NO DATA </div>
      </>
      )}
      </div>
    </main>
  )
}

export default UsersOrder