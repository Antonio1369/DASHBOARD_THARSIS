import React from 'react'
import {Link,Navlink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy';
function Sidebar() {
  const activeMenu =true;
  return (
    <div className='ml-3 h-screen md:overflow overflow-auto
    md:hover:overflow-auto pb-10'>
      {activeMenu && (
      <>
      <div className='flex justify-between items-center'>
        <Link to ='/' onClick={() => {}} className="items-center gap-3 ml-3
        mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <SiShopware/> <Span>Shoppy</Span>
        </Link>
        <TooltipComponent content="Menu" position='BottomCenter'>
          <button>
            <MdOutlineCancel/>
          </button>

        </TooltipComponent>

      </div>

      </>)}

    </div>
  )
}

export default Sidebar