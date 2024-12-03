import React from 'react'
import thity from "./thirty.png"
import saas from "./saaslanding.png"

const Experience = () => {
  return (
    <div className='w-[100vw] mb-10 '>
        <div className='my-10  '>
            <p className='lg:text-7xl text-4xl font-bold' >Projects</p>

        </div>



        {/* Video  */}
        <div className='w-full mt-20'>
        <div className='lg:flex lg:flex-row gap-10 my-auto  flex flex-col w-[80vw] shadow-xl  shadow-gray-500 bg-white mb-14  mx-auto rounded-lg  p-12' >
              <div className='w-full lg:w-1/2 flex'>
                <img className='w-[500px] h-[400px] rounded-lg'   src={thity}></img>

              </div>
              <div className='w-full lg:w-1/2 flex flex-col'>
                <p className='lg:text-5xl md:text-4xl text-3xl font-bold mt-12'>Thrity 40</p>
                <p className='md:text-2xl text-[16px] mt-8 text-left mx-auto w-full'> A dynamic, responsive website developed for a global tennis academy, utilizing React to create a modern and user-friendly platform for students and coaches across multiple countries.</p>
                {/* tech Stack Used  */}
                <div className='mt-8 w-full  lg:flex lg:flex-row flex-col items-center  gap-4  mx-auto  '>
                    <div className=' flex Html w-full lg:w-1/3 mb-4 lg:mb-0 h-[54px] font-semibold  bg-[#1877f2] text-xl  text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-blue-400 hover:scale-105'> 
                      <img className='rounded-[50%] w-[20px] h-[20px] ml-4 my-auto '   src='https://cdn.worldvectorlogo.com/logos/react-1.svg'></img>
                      <p className='  ml-2  m-auto '>React js</p></div>

                      <div className=' flex Html w-full lg:w-1/3  mb-4 lg:mb-0  h-[54px] font-semibold  bg-[#CA385C] text-xl text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-pink-300 hover:scale-105'> 
                      <img className='rounded-[50%]  w-[20px] h-[20px] ml-4 my-auto '   src='https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'></img>
                      <p className='m-auto text-left ml-2'>Tailwind CSS</p></div>
                      
                      <div className=' flex Html w-full lg:w-1/3  mb-4 lg:mb-0  h-[54px] font-semibold  bg-[#1877f2] text-xl text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-blue-400 hover:scale-105'> 
                      <img className='rounded-[50%]  w-[20px] h-[20px] ml-2 my-auto  '   src='https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030115.png?f=webp&w=256'></img>
                      <p className='m-auto text-left ml-2 '>Html</p></div>
                     
                </div>
                <button className='mt-20 hover:scale-105 mx-auto'>
                <a  href="https://thirty40.in/"  className="  inline-block rounded bg-[#3b71ca] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" style={{display: "table-cell"}}   type="button"  target="_blank">
                  Link</a>

                </button>
                
              </div>
              </div>

        <div className='lg:flex lg:flex-row gap-10   flex flex-col w-[80vw] shadow-xl shadow-gray-500 bg-white mb-14   mx-auto rounded-lg  p-12' >
              <div className='w-full lg:w-1/2 flex'>
                <img className='w-[500px] h-[400px] rounded-lg'   src={saas}></img>

              </div>
              <div className='w-full lg:w-1/2 flex flex-col'>
                <p className='lg:text-5xl md:text-4xl text-3xl font-bold mt-12'>SAAS Landing Page</p>
                <p className='md:text-2xl text-[16px] mt-8 text-left mx-auto w-full'>A modern, responsive SaaS landing page developed using React, showcasing my skills in front-end development and user interface design. This project demonstrates my ability to build high-performance web applications with seamless interactivity and smooth user experiences.</p>
                {/* tech Stack Used  */}
                <div className='mt-8 w-full  lg:flex lg:flex-row flex-col items-center  gap-4  mx-auto  '>
                    <div className=' flex Html w-full lg:w-1/3 mb-4 lg:mb-0 h-[54px] font-semibold  bg-[#1877f2] text-xl  text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-blue-400 hover:scale-105'> 
                      <img className='rounded-[50%] w-[20px] h-[20px] ml-4 my-auto '   src='https://cdn.worldvectorlogo.com/logos/react-1.svg'></img>
                      <p className='  ml-2  m-auto '>React js</p></div>

                      <div className=' flex Html w-full lg:w-1/3  mb-4 lg:mb-0  h-[54px] font-semibold  bg-[#CA385C] text-xl text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-pink-300 hover:scale-105'> 
                      <img className='rounded-[50%]  w-[20px] h-[20px] ml-4 my-auto '   src='https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'></img>
                      <p className='m-auto text-left ml-2'>Tailwind CSS</p></div>
                      
                      <div className=' flex Html w-full lg:w-1/3  mb-4 lg:mb-0  h-[54px] font-semibold  bg-[#1877f2] text-xl text-[#323258] rounded-md bg-opacity-[.08] my-auto text-center hover:bg-blue-400 hover:scale-105'> 
                      <img className='rounded-[50%]  w-[20px] h-[20px] ml-2 my-auto  '   src='https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030115.png?f=webp&w=256'></img>
                      <p className='m-auto text-left ml-2 '>Html</p></div>
                     
                </div>
                <button className='mt-20 hover:scale-105 mx-auto'>
                <a  href="https://landing-page-i4ig4sm98-dikshu-pys-projects.vercel.app/"  className="  inline-block rounded bg-[#3b71ca] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" style={{display: "table-cell"}}   type="button"  target="_blank">
                  Link</a>

                </button>
                
              </div>
              </div>

              
        </div>
    </div>
  )
}

export default Experience
