import React from 'react'

function NftSection({item}) {
  return (
    
    <div className=' flex flex-col p-3 border rounded-lg'>
        <img src={item.image} alt='house' className='mb-4'/>
        <div className='w-full flex flex-col '>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-gray-700 font-bold'>{item.name}</p>
                <p className='text-gray-700 font-bold'>{item.price}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-gray-700 font-bold'>{item.tag}</p>
                <p className='text-gray-700 font-bold'>{item.status}</p>
            </div>
        </div>
    </div>

  )
}

export default NftSection