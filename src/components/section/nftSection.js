import React from 'react'
import NftSection from './nft'
import nftItems from './nftFiles'

function PlaceSection() {
  return (
    <div className='md:py-12 md:px-20 px-4 py-6 flex flex-col'>
        <div className='w-full flex justify-center items-center'>
            <h2 className='text-gray-900 text-xl md:text-4xl font-extrabold'>Inspiration for your next adventure</h2>
        </div>
        <div className='w-full flex flex-col sm:justify-center sm:items-center md:grid md:grid-cols-4 gap-4 pt-12'>
            {
                nftItems.slice(0, 8).map((item) => (
                    <NftSection key={item.id} item={item} />
                ))
            }
        </div>

    </div>
  )
}

export default PlaceSection