import NavBar from '../components/Nav'; // Adjust the path components Nav

const faqspage = () => {
  return (
    <div className='bg-white'>
        <div>
            <NavBar/>  
            </div>
            <div className='container m-auto flex justify-items-center bg-white flex-col text-center py-10 pt-28 '> 
        <h1 className='text-6xl max-sm:text-4xl font-black text-black	'>FAQs</h1>
        <div className='p-10'>  
            <div className='flex justify-between border-b-2  border-black	'>      
        <p className='mt-2 text-black flex text-left font-semibold max-sm:text-xl text-3xl mb-3  '>How many participants can I host in a webinar?</p>
        <svg width="25" height="40" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L11 10L20 2" stroke="#F8B517" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

        <p className='mb-3 text-black flex text-left  text-xl'>V.connct supports up to 5000 participants, offering scalability for events of any size.</p>
        <div className='flex justify-between border-b-2 border-black	'>      
        <p className='mt-2 text-black flex text-left font-semibold max-sm:text-xl text-3xl  mb-3'>Can I live stream my webinars?</p>
        <svg width="25" height="40" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L11 10L20 2" stroke="#F8B517" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<p className='mb-3 text-black flex text-left'>Absolutely! Enjoy the benefits of reaching a wider audience in real-time.</p>
<div className='flex justify-between border-b-2 border-black	'>      
        <p className='mt-2 text-black flex text-left font-semibold max-sm:text-xl text-3xl mb-3'>How long can a webinar last?</p>
        <svg width="25" height="40" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L11 10L20 2" stroke="#F8B517" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<p className='mb-3 text-black flex text-left'>Webinars can extend up to 30 hours, providing flexibility for various event durations.</p>
<div className='flex justify-between border-b-2 border-black	'>      
        <p className='mt-2 text-black flex text-left font-semibold max-sm:text-xl text-3xl mb-3 '>Are email notifications automated?</p>
        <svg width="25" height="40" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L11 10L20 2" stroke="#F8B517" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<p className=' text-black flex text-left'>Yes, V.connct sends automated emails for registration, start, and end times.</p>
        </div>
        </div>
        <div className='container-fulid bg-black justify-center mt-10 pt-28 mb-5 text-center '> 
        <h1 className='font-bold text-5xl max-sm:text-xl'>Ready to Elevate Your Webinars?</h1>
        <button type="button" className="focus:outline-none mt-10 text-black text-lg bg-yellow-400 hover:bg-yellow-500 focus:ring-4 shadow-lg shadow-yellow-500/50 font-semibold rounded-lg px-7 py-3 me-2 mb-5 ">Buy Now</button>
        </div>
        </div>
        
    
)
};

export default faqspage;
