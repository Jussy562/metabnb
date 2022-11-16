import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col-reverse gap-10 md:flex-row md:justify-between w-full'>
        <div className='flex flex-col w-full md:w-2/3 justify-center items-center'>
            <div className='flex flex-col '>
                <h1 className='text-4xl md:text-6xl text-gray-900 font-bold mb-12'>Rent a <span className="text-pink-600">Place</span> away from <span className="text-pink-600">Home</span> in the <span className="text-pink-600">Metaverse</span></h1>
                <p className='mb-12  text-xl md:text-2xl'>We provide you access to luxury and affordable houses in the netaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <form className=''>
                    <div className='flex flex-row rounded-lg border border-gray-300 w-full md:w-2/3'>
                        <input  type={'text'} placeholder='search for a location' className='text-gray-300 px-4 border-none focus:outline-[#A02279]  w-2/3' />
                        <button className='w-1/3 px-4 py-4 rounded-r-lg  bg-[#A02279] text-white text-xl font-bold font-[poppins]  hover:bg-pink-400 transition duration:300'>
                            search
                        </button>
                    </div>
                
                </form>
            </div>
            
        </div>
        <div className=' p-0 w-full md:w-2/3 flex justify-center'>
            <img src='/images/bannerImage.png' alt='metabnb banner' className='w-full md:w-2/3' />
        </div>

    </div>
  )
}

export default Banner