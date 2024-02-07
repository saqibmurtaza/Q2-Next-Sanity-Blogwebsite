import { ModeToggle } from '@/components/ui/ModeToggle'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-full relative flex justify-between items-center max-w-2xl mx-auto px-5 py-4'>
        <Link href={'/'} className='font-bold text-3xl'>
            Muse & <span className='text-primary'>Meander</span>
        </Link>
        <ModeToggle/>
    </nav>
  )
}

export default NavBar