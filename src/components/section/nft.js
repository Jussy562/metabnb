import React from 'react'

function NftSection({item}) {
  return (
    
    <div className=' flex flex-col p-3 border shadow-lg rounded-lg'>
        <img src={item.image} alt='house' className='mb-4'/>
        <div className='w-full flex flex-col justify-between gap-2 '>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-gray-700 font-bold'>{item.name}</p>
                <p className='text-gray-700 font-bold'>{item.price}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-gray-700 font-bold'>{item.tag}</p>
                <p className='text-gray-700 font-bold'>{item.status}</p>
            </div>
            <div className='flex justify-start items-center'>
              <img src={item.rating} alt='rate' className=''/>
            </div>
        </div>
    </div>

  )
}

export default NftSection