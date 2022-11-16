import React from 'react';
import NftDiscover from '../section/nftDiscover';
import PlaceSection from '../section/nftSection';
import Navbar from '../navbar/navbar';
import Banner from '../banner/banner';

function Home() {
  return (
    <div>
        <header className='md:py-12 md:px-20 px-4 py-6  flex-col mb-6'>
        <Navbar />
        <Banner />
      </header>
      <section className='w-full'>
        <div className='bg-[#A02279] p-3 md:P-4  flex justify-between items-center md:grid md:grid-cols-3'>
          <div className='flex justify-center  items-center'>
            <img src='/images/mbToken.png' alt='mbtoken logo' className=' w-6 md:w-16'  />
            <h4 className='text-white text-sm md:text-xl md:font-bold'>MbToken</h4>
          </div>
          <div className='flex justify-center items-center'>
            <img src='/images/metamaskLogo.png' alt='metamask Icon' className='mr-2 w-6 md:w-12' />
            <h4 className='text-white text-sm md:text-xl md:font-bold'>METAMASK</h4>
            {/* <img src='/images/metamask.png' alt='metamask Icon'  /> */}
          </div>
          <div className='flex justify-center items-center'>
            <img src='/images/openseaLogo.png' alt='mbtoken logo' className='mr-2 w-6 md:w-12' />
            <h4 className='text-white text-sm md:text-xl md:font-bold'>OpenSea</h4>
          </div>
        </div>
        <PlaceSection />
        <NftDiscover />
      </section>
    </div>
  )
}

export default Home