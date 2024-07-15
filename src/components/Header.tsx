import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='container m-auto flex justify-between items-center h-full'>
      <Link
        href='/'
        className='text-white font-bold'
      >Home</Link>
    </div>
  )
}

export default Header
