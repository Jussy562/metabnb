import React, {useState} from 'react';
import ConnectWallet from '../modal/wallet/connectWallet';
import menuItems from './navMenuFiles';


function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);
  return (
    <nav class='bg-white fixed top-0 left-0 md:pb-6 md:pt-12 md:px-20 px-4 py-6 mb-20 w-full justify-between md:flex md:justify-between md:item-center  '>
      
      
       <div className='flex justify-between item-center'>
          <a href='/' className='flex justify-start items-center'>
              <img src='/images/metabnbLogo.png' alt='metbnb logo' className='w-28 md:w-30 lg:w-40' />
             
              
          </a>
         
          <div onClick={() => setOpen(!open)} className=' md:hidden text-3xl cursor-pointer'>
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
             
            
          </div>

          
         
       </div>
       
        
        <div className={` md:w-2/3 md:flex md:flex-row md:justify-between 
        md:items-center md:space-x-4
        ${open ? 'flex flex-col' : 'hidden'}`}>
          
          <ul className='md:flex  md:gap-4 justify-between items-center'>

            {
              menuItems.map((item) => (
                  <li
                  key={item.id}
                  className='p-0 my-4 md:my-0'
                  >
                      <a key={item.id} href={item.url} 
                      className='text-lg md:text-lg lg:text-2xl xl:text-3xl text-gray900 hover:text-[#A02279]'   
                      > 
                      {item.name}
                      </a>
                  </li>
              ))
            }         
           
            
          </ul>
          
          <button onClick={()=> setShowModal(true)} className='px-4 md:px-4 py-2 md:py-4 rounded-lg bg-[#A02279] text-white text-lg md:text-lg font-bold font-[poppins]  hover:bg-pink-400 transition duration:300'>
              connect wallet
          </button>
        
        </div>
        <ConnectWallet onClose={handleOnClose} visible={showModal} />

      
    </nav>
  )
}

export default Navbar