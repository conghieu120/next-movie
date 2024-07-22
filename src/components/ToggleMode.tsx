"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ToggleTheme = () => {
  const [theme, setTheme] = useState<'' | 'DARK' | any>(localStorage.getItem('theme') || 'LIGHT')

  useEffect(() => {
    updateThemToDom(theme)
  }, [])

  const updateThemToDom = (newTheme: string) => {
    const bodyElement = document.querySelector('body')
    if (newTheme === 'DARK') {
      bodyElement?.classList.add('dark')
    } else (
      bodyElement?.classList.remove('dark')
    )
  }

  const onToggleTheme = () => {
    const newTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    updateThemToDom(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div style={{ width: '24px', height: '24px' }} onClick={onToggleTheme} className='cursor-pointer'>
      <Image
        src={theme === 'DARK' ? '/light-mode.png' : '/night-mode.png' }
        width={64}
        height={64}

        alt='Day mode'
      />
    </div>
  )
}

export default ToggleTheme
