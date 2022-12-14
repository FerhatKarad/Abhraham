import React, { useState } from 'react'
//import Button from './Button';
import { ImFilm } from 'react-icons/im'

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "BLOG'S", link: "#blog" },
    { name: "CONTACT", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='shadow-md  w-full fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <div className='m-1'>
            <a href='/'>Abraham  Jackson TV</a>
          </div>
          <ImFilm />


        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} onClick={handleClose} className='text-base text-gray-500 hover:text-lg duration-500'>
                  {link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar