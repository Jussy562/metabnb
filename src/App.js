
import './App.css';
import Banner from './components/banner/banner';
import Navbar from './components/navbar/navbar';
import NftDiscover from './components/section/nftDiscover';
import PlaceSection from './components/section/nftSection';

function App() {
  return (
    <div className=" min-h-screen w-screen">
      <header className='md:py-12 md:px-20 px-4 py-6  flex-col mb-6'>
        <Navbar />
        <Banner />
      </header>
      <section className='w-full'>
        <div className='bg-pink-600 p-3 md:P-4  flex justify-between items-center md:grid md:grid-cols-3'>
          <div className='flex justify-center items-center'>
            <img src='/images/mbToken.png' alt='mbtoken logo' className='w-6'  />
            <h4 className='text-white text-sm'>MbToken</h4>
          </div>
          <div className='flex justify-center items-center'>
            <img src='/images/metamaskLogo.png' alt='metamask Icon' className='w-6' />
            <h4 className='text-white text-sm '>METAMASK</h4>
            {/* <img src='/images/metamask.png' alt='metamask Icon'  /> */}
          </div>
          <div className='flex justify-center items-center'>
            <img src='/images/openseaLogo.png' alt='mbtoken logo' className='w-6' />
            <h4 className='text-white text-sm '>OpenSea</h4>
          </div>
        </div>
        <PlaceSection />
        <NftDiscover />
      </section>
      
    </div>
  );
}

export default App;
