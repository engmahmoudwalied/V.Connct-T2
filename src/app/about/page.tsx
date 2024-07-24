import Image from 'next/image';
import NavBar from '../components/Nav'; // Adjust the path components Nav

const AboutPage = () => {
  return (
    
    <div className='bg-white'>
      <NavBar />  
      <div className='container m-auto flex justify-items-center flex-col text-center pt-40 '> 
        <h1 className='text-3xl	font-black text-black	'>Get to Know V.Connct Webinar</h1>
        <p className='mt-2 text-black'>Explore the seamless flow of V.connct webinars, ensuring a smooth experience for both hosts and participants.</p>
        </div>
        <div className="flex justify-center text-center">
<div className=" container-fuil max-sm:grid-cols-1 inline-grid gap-3 grid-cols-3  mt-10 	">

<div className='grid grid-col	'>
<div className="block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<h1 className='text-2xl font-extrabold text-center mb-4'>Webinar Schedule</h1>
<p>Plan your events with precision, ensuring that your audience knows when to tune in.</p>
<Image
        src="/card5.png"    
        width={500}         
        height={300}  
        style={{width:"100%"}}      
        alt="Home Image"   
      />
             </div>
<div className="block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<h1 className='text-2xl font-extrabold text-center mb-11'>Brand Identity</h1>
<Image
        src="/card6.png"    
        width={500}         
        height={300}    
        style={{width:"100%"}}      
        
        alt="Home Image"/>
             </div>
             </div>
  <div className=' grid grid-flow-col	'>
<div className="block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<Image
        src="/card3.png"    
        width={500}         
        height={300}   
        style={{width:"100%"}}      
        alt="Home Image"   
      />
<h1 className='text-2xl font-extrabold text-center'>Register form</h1>
<p>Easily collect participant information with our user-friendly registration forms.</p>
<Image
        src="/card4.png"    
        width={500}         
        height={300} 
        style={{width:"100%"}}      
        alt="Home Image"   
      />
             </div>
             </div>
             <div className='grid grid-col'>
             <div className="block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<h1 className='text-2xl font-extrabold text-center mb-4'>Shareable Card</h1>
<Image
        src="/card1.png"    
        width={500}        
        height={300}  
        style={{width:"100%"}}      
        alt="Home Image"/>
             </div>
             <div className="block max-w-sm p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<h1 className='text-2xl font-extrabold text-center mb-2'>Email Notifications</h1>
<p>Keep participants informed with emails for registration confirmation, webinar start & end.
</p>
<Image
        src="/card2.png"    
        width={500}         
        height={300}
        style={{width:"100%"}}      
        alt="Home Image"   
      />
             </div>
             </div>
             
</div>
</div>
<div className='container-fulid flex justify-center mt-10 pb-7 text-center '> 
        <button type="button" className="focus:outline-none text-white bg-[#1B1B1B] hover:bg-slate-700 focus:ring-4 font-medium rounded-lg text-sm  px-7 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Plans & Pricing</button>
        
        </div>
</div>
  )
};

export default AboutPage;
