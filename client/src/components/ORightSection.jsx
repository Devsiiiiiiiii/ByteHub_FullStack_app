import React from 'react'
import { Route, Routes } from "react-router-dom";
import{ VendorsMenu, Header} from '../components';



const ORightSection = () => {
  return (
    <main className='h-full w-full  flex flex-col bg-lightOverlay backdrop-blr-12 shadow-md min-w-210 w-300 gap-3'>
      <Header />
    <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/yummpys" element={<VendorsMenu />} />
          
          </Routes>
    </div>
    
    </main>
  )
}

export default ORightSection
