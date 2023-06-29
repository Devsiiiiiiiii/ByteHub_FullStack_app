import React from 'react'
import {motion} from"framer-motion";
import { Delivery, HeroBg } from '../assets';
import { buttonClick, staggerFadeInOut } from '../animations';
import { heroData } from '../utils/styles';
const Home = () => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
      <div className=" flex flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full drop-shadow-xl">
          <p className="text-lg text-black-500 font-semibold drop-shadow-xl">
            PRE-ORDER, SAVE TIME.
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden shadow-md ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[40px] md:text-[72px] font-sans font-bold tracking-wider text-headingColor">
          Order you food from your 
          <span className="text-orange-600 text-[2.5rem] lg:text-[4.5rem]">
          ‎ favourite Outlet!
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
         This is BYTE HUB, you can find all the outlets present in BITS HYDERABD CAMPUS. Order your food from your favourite outlet way ahead to reduce the waiting time. Get notified when your order is READY!
        </p>

        <motion.button 
          {...buttonClick}
          className="bg-gradient-to-bl from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white font-semibold"
        >
          Order Now!
        </motion.button>
      </div>


      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-auto flex items-center justify-center   py-4 gap-4 flex-wrap">
        {heroData &&
            heroData.map((n , i) => (
              <motion.button {...buttonClick}
                key={i} {...staggerFadeInOut(i)}
                className="  w-32 h-36 md: h-auto md:w-190 p-4 bg-lightOverlay
                backdrop-blur-md rounded-3xl flex flex-col items-center
                justify-center drop-shadow-lg">
              
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:mt-20 "
                  alt="I1"
                />
                <p className="text-sm lg:text-xl font-bold text-black mt-2 lg:mt-4">
                  {n.name}
                </p>

                                
              </motion.button >
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Home
