import React from 'react'
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
        <div className="navbar bg-transparent shadow-sm md:px-20 ">
            <div className="navbar-start flex ">
                <img src={logo} alt="" className='max-md:w-[40px] cursor-pointer'/>
                <div className='flex flex-col items-start'>
                    <a href='/' className="text-xl md:text-3xl text-purple-500 font-black ">Secret Vault</a>
                    <p className='text-gray-400 max-md:text-sm'>Where secrets find their home</p>
                </div>
            </div>

            <div className="navbar-end"  >
                <a className="btn border-none bg-gradient-to-r from-purple-500 to-purple-700 text-black font-bold" onClick={()=>document.getElementById('my_modal_2').showModal()} >+ Add Secret</a>
            </div>
        </div>
  )
}

export default NavBar