import React from 'react'
const navbar = () => {
  return (
    <div className='w-[100vw] flex justify-around p-2 bg-gray-600'>
        <span className='font-bold text-6 hover:cursor-pointer hover:font-extrabold hover:transition-all'> iTask</span>
        <span className='hover:cursor-pointer hover:font-bold hover:transition-all'> Home </span>
        <span className='hover:cursor-pointer hover:font-bold hover:transition-all'> Your Task</span>
      
    </div>
  )
}

export default navbar
