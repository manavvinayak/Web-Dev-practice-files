import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between'>
         <div className='bg-blue-300'>
          child1
         </div>
         <div className='bg-red-500'>
          child2
         </div>
         <div className='bg-pink-300'>

          child3
         </div>
         
         </div>

         <div className='grid grid-cols-12 mt-6'>
          <div className='bg-blue-400 col-span-4 '> Child1</div>
          <div className='bg-gray-400 col-span-5'> Child2</div>
          <div className='bg-fuchsia-400 col-span-3'> Child3</div>

         </div>

         <div className=' mt-5 xl:bg-yellow-300 md:bg-green-400  sm:bg-blue-400 bg-red-500'>
           Responsiveness of screen 
         </div>
      
          <div className='mt-16 grid grid-col-3 sm:grid-cols-12 lg:grid-cols-10 '>
              <div className='col-span-1 sm:col-span-5 bg-green-700  lg:col-span-4 text-2xl rounded-full'>Hi from first div</div>
              <div className='col-span-1 sm:col-span-5  bg-red-500  lg:col-span-4 rounded-md'>Hi from second div</div>
              <div className='col-span-1 sm:col-span-2  bg-pink-300  lg:col-span-2'>Hi from third div</div>
          </div>
    </>
  )
}

export default App
