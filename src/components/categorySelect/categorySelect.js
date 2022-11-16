import React, {useState} from 'react';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';


const options = [
    {value: "Restaurant", label: "Restaurant"},
    {value: "Cottage", label: "Cottage"},
    {value: "Castle", label: "Castle"},
    {value: "Fantast City", label: "Fantast City"},
    {value: "Beach", label: "Beach"},
    {value: "Carbins", label: "Carbins"},
    {value: "Off-grid", label: "Off-grid"},
    {value: "Farms", label: "Farms"},
];

function Category() {

    const [places, setPlaces] = useState("Places");
    const [openOption, setOpenOption] = useState(false);

    // const handleValue = () => setPlaces(item.value);
    const handleMenu = () => 
        setOpenOption(!openOption);
    

    // onClick={() => setPlaces(item.value)};


    
   

  return (
    <div className='grid grid-cols-2 gap-4 md:flex mt-5 md:px-20 px-4 md:gap-11 w-full'>

        {/* <Select
            value={places}
            onChange={handleChange}
            options={options}
        /> */}
        <div className='flex flex-col w-40 justify-between md:hidden  font-medium '>
            <div className='bg-white w-full p-2 border border-gray-300 flex items-center justify-between rounded-lg h-{30px}'>
                {places}
                {
                    openOption ?
                    <>
                        <BiChevronUp onClick={handleMenu} />
                    </>
                    :
                    <>
                        <BiChevronDown onClick={handleMenu} />
                    </>
                }
                
            </div>
            <ul className={`fixed top-36 left-4 bg-white mt-2 h-80 w-40  ${openOption ? ' ' : 'hidden'}`}>
                {
                    options.map((item) => (
                        <li onClick={() =>{
                            setPlaces(item.value);
                            setOpenOption(!openOption);
                        }}
                            className='p-2 text-sm hover:bg-[#A02279] hover:text-white cursor-pointer' key={item.value}>{item.value}</li>
                    ))
                }
                
               
            </ul>
        </div>
        <div className='hidden md:flex gap-10'>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Restaurant</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Cottage</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Castle</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Fantast City</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Beach</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Carbins</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Off-grid</a>
            <a href='/' className='text-3xl text-black hover:text-[#A02279]'>Farm</a>
        </div>
        <div className='flex justify-between items-center rounded-lg border border-gray-300 p-2 md:px-6 md:py-2 h-[40px] md:h-auto w-auto '>
            <p className=''>Location</p>
            <img src='/images/setting.png' alt='setting' />
        </div>
    </div>
  )
}

export default Category