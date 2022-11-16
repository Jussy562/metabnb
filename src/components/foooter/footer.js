import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col md:grid md:grid-cols-4 md:gap-3 p-20 h-80 bg-black'>
        <div className='flex flex-col justify-between items-center'>
            <img src='/images/metabnb.png' alt='footer logo ' className='mb-12'/>
            <div className='flex flex-row justify-center items-center mb-6 gap-6 w-full'>
                <img src='images/facebook.png' alt='facebook' />
                <img src='images/instagram.png' alt='instagram' />
                <img src='images/twitter.png' alt='twitter' />
            </div>
            <div className='flex text-gray-400'>
                <ion-icon name="copyright-outline"></ion-icon>
                <p>2022 Metabnb</p>

            </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-8'>
            <div>
                <h5 className='text-white text-lg font-bold'>Community</h5>
            </div>
            <div className='flex flex-col justify-between items-center gap-4'>
                <p className='text-gray-400 text-sm'>NFT</p>
                <p className='text-gray-400 text-sm'>Tokens</p>
                <p className='text-gray-400 text-sm'>Landlords</p>
                <p className='text-gray-400 text-sm'>Discord</p>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-8'>
            <div>
                <h5 className='text-white text-lg font-bold'>Places</h5>
            </div>
            <div className='flex flex-col justify-between items-center gap-4'>
                <p className='text-gray-400 text-sm'>Castles</p>
                <p className='text-gray-400 text-sm'>Farms</p>
                <p className='text-gray-400 text-sm'>Beach</p>
                <p className='text-gray-400 text-sm'>Learn more</p>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-8'>
            <div>
                <h5 className='text-white text-lg font-bold'>About us</h5>
            </div>
            <div className='flex flex-col justify-between items-center gap-4'>
                <p className='text-gray-400 text-sm'>Roadmap</p>
                <p className='text-gray-400 text-sm'>Creators</p>
                <p className='text-gray-400 text-sm'>Career</p>
                <p className='text-gray-400 text-sm'>Contact us</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer