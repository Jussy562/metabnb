import React from 'react'
import NftSection from './nft'
import nftItems from './nftFiles'

function PlaceNft() {
  return (
    <div className='md:pt-10 md:pb-20 md:px-20 px-4 py-6 flex flex-col'>
        
        <div className='w-full flex flex-col sm:justify-center sm:items-center md:grid md:grid-cols-4 gap-4'>
            {
                nftItems.map((item) => (
                    <NftSection key={item.id} item={item} />
                ))
            }
        </div>

    </div>
  )
}

export default PlaceNft