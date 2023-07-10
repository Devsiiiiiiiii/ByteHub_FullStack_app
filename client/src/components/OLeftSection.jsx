import React from 'react'
import {NavLink, Link, useNavigate} from "react-router-dom";
import {Logo} from '../assets';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';


const OLeftSection = () => {
  return (
    <div className='h-full py-12 flex flex-col bg-lightOverlay backdrop-blr-12 shadow-md min-w-210 w-300 gap-3'>
     

    

    <ul   className='flex flex-col gap-4 justify-center'>
    <NavLink
          className={({ isActive }) =>
            isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles
          }
          to={"/outlets/yummpys"}

          
        >
          YUMMPYS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`  : isNotActiveStyles
          }
          to={"/outlets/bits&bytes"}
        >
          BITS & BYTES
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500` : isNotActiveStyles
          }
          to={"/outlets/hotspot"}
        >
          HOTSPOT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`  : isNotActiveStyles
          }
          to={"/outlets/wichplease"}
        >
          WICHPLEASE
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`  : isNotActiveStyles
          }
          to={"/outlets/sfc"}
        >
          SFC
        </NavLink>

    </ul>
  
</div>
  
  )
}

export default OLeftSection
