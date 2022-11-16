import React, {useState} from 'react';
import menuItems from './navMenuFiles';


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav class='bg-none mb-20 w-full md:flex md:justify-between md:item-center  '>
      
      
       <div className='flex justify-between item-center'>
          <a href='/' className='text-2xl text-orange-600'>
              <img src='/images/metabnbLogo.png' alt='metbnb logo' className='' />
             
              
          </a>
          {/* <div className='text-3xl cur'>
            <ion-icon name="menu"></ion-icon>
          </div> */}
          <div onClick={() => setOpen(!open)} className='z-index-1 md:hidden text-3xl cursor-pointer'>
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
             
            
          </div>

          {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button> */}
         
       </div>
       
        
        <div className={` md:w-2/3 md:flex md:flex-row md:justify-between 
        md:items-center md:space-x-4
        ${open ? 'flex flex-col' : 'hidden'}`}>
          
          <ul className='md:flex  md:gap-6 justify-between items-center'>

            {
                                menuItems.map((item) => (
                                    <li
                                    key={item.id}
                                    className='p-0 my-7 md:my-0'
                                    >
                                        <a key={item.id} href={item.url} className='text-3xl text-gray900 hover:text-[#A02279]'   > {item.name}</a>
                                    </li>
                                ))
            }
           
            
          </ul>
          
          <button className='px-4 py-4 rounded-lg bg-[#A02279] text-white text-xl font-bold font-[poppins]  hover:bg-pink-400 transition duration:300'>
              connect wallet
          </button>
          {/* <div className='flex'>
            
            
            
          </div> */}
        </div>

      
    </nav>
  )
}

export default Navbar