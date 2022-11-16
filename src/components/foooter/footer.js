import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer() {
  return (
    <footer className='flex flex-col justify-start md:grid md:grid-cols-4 md:gap-3 p-6 md:p-20 h-auto bg-black'>
        <div className='mb-6 md:mb-0 md:flex flex-col justify-start md:justify-between items-center'>
            <img src='/images/metabnb.png' alt='footer logo ' className='mb-6 md:mb-12 w-28'/>
            <div className='flex flex-row justify-start md:justify-center items-center mb-6 gap-6 w-full'>
                <a href="/"><img src='images/facebook.png' alt='facebook' /></a>
                <a href="/"><img src='images/instagram.png' alt='instagram' /></a>
                <a href="/"><img src='images/twitter.png' alt='twitter' /></a>
            </div>
            <div className='flex items-center justify-start md:justify-center text-xsm md:text-lg text-gray-400'>
                <AiOutlineCopyrightCircle />
                <p className='ml-3 '>2022 Metabnb</p>

            </div>
        </div>

        <div className='mb-6 md:mb-0 md:flex flex-col justify-start md:justify-between items-center gap-8'>
            <div className='justify-start md:justify-center'>
                <h5 className='text-white text-sm md:text-lg font-bold'>Community</h5>
            </div>
            <div className='flex flex-col justify-start md:justify-between md:items-center gap-4'>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>NFT</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Tokens</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Landlords</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Discord</a>
            </div>
        </div>

        <div className='mb-6 md:mb-0 md:flex flex-col justify-between items-center gap-8'>
            <div className='justify-start md:justify-center'>
                <h5 className='text-white text-sm md:text-lg font-bold'>Places</h5>
            </div>
            <div className='flex flex-col justify-start md:justify-between md:items-center gap-4'>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Castles</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Farms</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Beach</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Learn more</a>
            </div>
        </div>

        <div className='md:flex flex-col justify-start md:justify-between items-center gap-8'>
            <div className='justify-start md:justify-center'>
                <h5 className='text-white text-sm md:text-lg font-bold'>About us</h5>
            </div>
            <div className='flex flex-col justify-start md:justify-between md:items-center gap-4'>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Roadmap</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Creators</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Career</a>
                <a href='/' className='text-gray-400 text-xsm md:text-sm hover:text-[#A02279]'>Contact us</a>
            </div>
        </div>

    </footer>
  )
}

export default Footer