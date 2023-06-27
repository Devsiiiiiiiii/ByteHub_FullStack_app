import React from 'react'
import { DBLeftSection, DBRightSection } from '../components'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen flex items-center bg-primary'>
        <DBLeftSection/>
        <DBRightSection/>
      Dashboard
    </div>
  )
}

export default Dashboard
