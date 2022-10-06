import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton =({tittle, customFunc,icon, color, dotColor}) => (
<TooltipComponent content={tittle} position ="BottomCenter">
  <button type ="button" onClick={customFunc} style={{color}}
  className="relative text-xl rounded-full p-3 hover:bg-light-gray" >
  
  <span style={{ background: dotColor}}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" >
      {icon}
  </span>

  </button>
</TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu} =useStateContext();

  return (
    <div
    className='flex justify-between p-2 md:mx-6 relative'>
    <NavButton tittle="Menu" customFunc={() => setActiveMenu((prevActiveMenu)=>
      !prevActiveMenu)} color="blue" icon ={<AiOutlineMenu/>} />
    
    <div className='flex'>
      <NavButton 
        tittle="Cart" 
        customFunc={() => handleClick('cart')} 
        color="blue" 
        icon ={<FiShoppingCart />} 
      />
      <NavButton 
        tittle="Chat" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')} 
        color="blue" 
        icon ={<BsChatLeft />} 
      />
      <NavButton 
        tittle="Notifications" 
        dotColor="#03C9D7"
        customFunc={() => handleClick('notification')} 
        color="blue" 
        icon ={<RiNotification3Line />} 
      />
      <TooltipComponent
          content="Profile"
          position = "BottomCenter"
      >
        <div clasname ="flex items-center gap-2 cursor-pointer p-1
        hover:bg-light-gray rounded-lg"
        onClick={()=> handleClick('userProfile')} >

        </div>
        
      </TooltipComponent>
    </div>

    </div>
  )
}

export default Navbar