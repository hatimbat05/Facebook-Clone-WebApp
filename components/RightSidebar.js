import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
          <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
          <div className='flex space-x-1 px-2'>
            <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
              <RiVideoAddFill />
            </div>
            <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
              <BiSearch />
            </div>
            <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
              <CgMoreAlt />
            </div>
          </div>
        </div>
        <Contacts src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            name='Hatim Batterywala' 
            status='Online' />
        <Contacts src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            name='Nikhil Gupta' 
            status='Online'/>
        <Contacts src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            name='Shivam Kumar' 
            status='Offline'/>
        <Contacts src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            name='Priyanka Singh' 
            status='Online'/>
    </div>
  );
};
export default RightSidebar