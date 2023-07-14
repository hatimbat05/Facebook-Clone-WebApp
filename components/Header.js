import Image from 'next/image';
import React from 'react';
//icon-imports
import {HiOutlineSearch,HiOutlineHome} from "react-icons/hi"
import {RiFlag2Line } from 'react-icons/ri'
import {BiVideoPlus } from 'react-icons/bi'
import {BiShoppingBag} from 'react-icons/bi'
import {IoGameControllerOutline} from 'react-icons/io5'
import {CgMenuGridO} from 'react-icons/cg'
import {AiOutlineShop,AiFillMessage,AiFillBell } from 'react-icons/ai'
import {MdOutlineExpandMore} from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const{data: session} =useSession();
  return (
  <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16 " >
    {/* {left} */}
    <div className="flex min-w-fit">
        <Image src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
        height={50} width={50}  
        />
        <div className="flex items-center space-x-1 px-2 rounded-full ml-1 bg-gray-100 text-gray-500" >
          <HiOutlineSearch size={20} />
          <input className='hidden lg:inline-flex bg-transparent' 
          type="text" placeholder='Search Meta' />
        </div>
    </div>
    {/* {center} */}
    <div className='flex flex-grow justify-center mx-2' >
      <div className='flex items-center' >
        <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
          <HiOutlineHome className='mx-auto' size={25} />
        </div>
        <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
          <RiFlag2Line className='mx-auto' size={25} />
        </div>
        <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
          <BiVideoPlus className='mx-auto' size={25} />
        </div>
        <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
          <BiShoppingBag className='mx-auto' size={25} />
        </div>
        <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
          <IoGameControllerOutline className='mx-auto' size={25} />
        </div>
      </div>
    </div>
    {/* {right} */}
    <div className='flex items-center justify-end min-w-fit space-x-2' >
    <Image src={session?.user.image }
      onClick={signOut}
      height={50} width={50}  
      className='rounded-full cursor-pointer'
    />
    <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs' >
      {session?.user.name.split(" ")[0] } </p>
    <CgMenuGridO size={20} 
    className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
    />
    <AiFillMessage size={20} 
    className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
    />
    <AiFillBell size={20} 
    className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
    />
    <MdOutlineExpandMore size={20} 
    className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
    />

    </div>
  </div>
  );
    
};
export default Header