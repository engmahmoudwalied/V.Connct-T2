import Image from 'next/image';
import NavBar from './components/Nav'; // Adjust the path components Navbar
const Homepage = () => {
  return (
    <div>
      <NavBar />  
      <div className='container m-auto flex justify-items-center flex-col text-center pt-28'> 
        <h1 className='text-6xl max-sm:text-xl font-black'>All-in-One Solution for
        <br/>
        Effortless Webinar Hosting</h1>
        <p className='mt-7'>Create immersive live Webinar experiences with everything you need. Join industry experts for a <br/>transformative learning experience and gain the audience you need.</p>
        <div className='mt-10'>
        <button type="button" className="focus:outline-none max-sm:text-xs text-white bg-[#F8B517] hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Plans & Pricing</button>
        <button type="button" className ="py-2 px-5 me-2 mb-2 max-sm:text-sm text-base font-medium border-2 text-gray-100 focus:outline-none  border-gray-100 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-1 focus:ring-gray-100 dark:text-gray-100 dark:border-gray-100 dark:hover:text-rose-900		">Contact Us</button>
        </div>
        <Image
        src="/home.png"    
        width={900}           
        height={100}  
        style={{width:"100%"}}      
        alt="Home Image"   
      />   
       </div>
    </div>
  )
};

export default Homepage;
