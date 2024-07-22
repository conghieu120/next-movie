import Link from 'next/link'
import React from 'react'
import ToggleTheme from './ToggleMode'

const Header = () => {
  return (
    <div className='container m-auto flex justify-between items-center h-full'>
      <Link
        href='/'
        className='text-white font-bold'
      >Home</Link>
      <ToggleTheme/>
    </div>
  )
}

export default Header
