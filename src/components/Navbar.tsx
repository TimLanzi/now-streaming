import React from 'react'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { PlayCircle } from "lucide-react"
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();

  return (
    <header className='fixed w-full bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-8 max-w-6xl flex flex-col md:flex-row space-y-5 md:space-y-0 items-center md:space-x-12 lg:space-x-24'>
        {/* <div> */}
          <Link href='/' className='text-2xl inline-flex items-center'>
            <PlayCircle className='stroke-indigo-600 inline' size={35} />
            &nbsp;Now Steaming
          </Link>
        {/* </div> */}

        { !['/', '/search'].includes(router.pathname) && (
          <SearchBar color='inverted' />
        )}
      </div>
    </header>
  )
}

export default Navbar