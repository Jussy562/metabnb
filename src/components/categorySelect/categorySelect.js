import React, {useState} from 'react';
import Select from 'react-tailwindcss-select';

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
    
    const handleChange = (value) => {
        
        setPlaces(value);
    };

  return (
    <div className='flex mt-5 md:px-20 px-4 md:gap-11'>

        {/* <Select
            value={places}
            onChange={handleChange}
            options={options}
        /> */}
        <div className='flex flex-col md:hidden font-medium'>
            <div className='bg-white w-full p-2 flex items-center justify-between rounded-lg'>
                Places

            </div>
            <ul className='bg-white mt-2'>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Restaurant</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Cottage</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Castle</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Fantast City</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Beach</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Carbins</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Off-grid</li>
                <li className='p-2 text-sm hover:bg-[#A02279] hover:text-white'>Farms</li>
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
        <button className='rounded-lg border border-gray-300 px-6 py-2'>
            Location
        </button>
    </div>
  )
}

export default Category