import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="px-24 py-6 flex items-center text-white-light">
        <h2 className="font-bold text-5xl flex-1">
          gbrown.
        </h2>

        <Link className="mx-4 text-md hover:text-gray-light font-bold" to='/'>Home</Link>
        <Link className="mx-4 text-md hover:text-gray-light" to='/'>Portfolio</Link>
        <Link className="mx-4 text-md hover:text-gray-light" to='/'>Blogs</Link>
        <Link className="mx-4 text-md hover:text-gray-light" to='/'>Hire me</Link>
        <Link className="mx-4 text-md hover:text-gray-light" to='/'>Contact</Link>

        <div className="flex">
          {/*Icons*/}
          <FaGithub className='mx-1.5 text-lg cursor-pointer hover:text-gray-light'/>
          <FaTwitter className='mx-1.5 text-lg cursor-pointer hover:text-gray-light'/>
          <FaLinkedin className='mx-1.5 text-lg cursor-pointer hover:text-gray-light'/>

        </div>
    </nav>
  )
}

export default Navbar