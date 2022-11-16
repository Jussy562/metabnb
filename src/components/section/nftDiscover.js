import React from 'react'

function  NftDiscover() {
  return (
    <div className='w-full bg-[#A02279] p-6  md:p-20 flex flex-col-reverse justify-between items-center md:flex md:flex-row md:gap-8'>  
        <div className='flex jusitfy-start w-auto md:w-1/2'>
            <div className='flex flex-col gap-6 w-auto md:w-2/3'>
              <h2 className='text-white text-2xl md:text-7xl'>
                  Metabnb NFTs
              </h2>
              
              <p className='text-white text-lg md:text-2xl font-light '>
              Discover our NFT gift cards collection. Loyal customers gets 
              amazing gift cards which are traded as NFTs. These NFTs gives our 
              cutomer access to loads of our exclusive services.
              </p>
              <a href='/' className='px-4 py-4 rounded-lg bg-white 
              text-[#A02279] font-[poppins]  hover:bg-pink-400 
              transition duration:300 w-full md:w-[156px] text-center text-xl '>
                Learn more
              </a>
            </div>
            
        </div>

        <div className='flex justify-center md:w-1/2 mb-8 md:mb-0'>
            <img src='/images/discover.png' alt='discover' className='w-' />
        </div>
    </div>
  )
}

export default NftDiscover