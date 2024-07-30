import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-pink-900 text-amber-50 py-3'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>MyTask</span>
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your-Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
