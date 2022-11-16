import React from 'react'
import Category from '../categorySelect/categorySelect'
import PlaceNft from '../section/nftPlace'

function Place() {
  return (
    <div className='mt-20 md:mt-40 flex flex-col'>
        <Category />
        <PlaceNft />
    </div>
  )
}

export default Place