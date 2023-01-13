import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-pink-500 to-fuchsia-700 max-w-screen text-white'>
        <div className='flex py-3 sm:px-10 px-3 justify-between'>
            <h1 className='text-4xl font-bold '>Navbar</h1>
           <Link to="/"><button className='font-semibold pt-2'>Login</button></Link> 
        </div>
    </nav>
  )
}
