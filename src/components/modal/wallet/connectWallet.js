import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

function ConnectWallet({visible, onClose}) {
    if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 
    backdrop-blur-sm flex justify-center items-center '>
        <div className='bg-white p-5 w-1/3 rounded-lg '>
            <div className='flex justify-between items-center pb-4'>
                <p className='font-bold text-black text-xl'>Connect Wallet</p>
                <button onClick={onClose} className='text-[#A02279] font-bold text-xl'>X</button>
            </div>
            <hr />
            <div className='p-5 flex flex-col justify-between gap-3'>
                <p>Choose your prefered wallet:</p>
                <a href='/' className='flex justify-between items-center p-2 w-full border 
                border-gray-300 rounded-lg hover:bg-gray-100'>
                
                    <div className='flex text-l items-center gap-1 text-black font-bold'>
                        <img src='/images/metamaskC.png' alt='meatmask connect' />
                        Metamask
                    </div>
                    <div className='flex text-xl text-gray-400'>
                        <BiChevronRight />
                    </div>

                </a>

                <a href='/' className=' flex justify-between items-center p-2 w-full border 
                border-gray-300 rounded-lg hover:bg-gray-100'>
                
                    <div className='flex text-l items-center gap-1 text-black font-bold'>
                        <img src='/images/walletC.png' alt='wallet connect' />
                        WalletConnect
                    </div>
                    <div className='flex text-xl text-gray-400'>
                        <BiChevronRight />
                        
                    </div>

                </a>

            </div>

        </div>

    </div>
  )
}

export default ConnectWallet