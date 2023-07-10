import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import '../assets/css/swiperStyles.css'


import { useSelector } from 'react-redux';
import {SliderCard} from '../components';

const SilderComp = () => {

    const products= useSelector((state) => state.products)
    const [rice, setRice] = useState(null);
    useEffect(() => {
      setRice(products?.filter((data) => data.product_category === "rice"))
      console.log(rice)
    }, [products])



  return (
    <div className='w-auto pt-12 '>
     <Swiper
       slidesPerView={4}
       centeredSlides={false}
       spaceBetween={20}
       grabCursor={true}
       className="mySwiper"
        
      >
        {rice && rice.map((data, i) => (
          <SwiperSlide key={i}> 
            <SliderCard key={i} data ={data} index ={i}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SilderComp
