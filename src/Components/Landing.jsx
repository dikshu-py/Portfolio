import React from 'react'
import profilepic from "./profile.png"
import { TypeAnimation } from 'react-type-animation';


const Landing = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col md:px-20 px-10  h-[100vh] md:w-[100vw] w-full  bg-gradient-to-r from-blue-100 to-purple-100 mx-auto overflow-hidden">
        
                             
        <div className=" md:mt-20 mt-[150px]  md:absolute sm:my-auto    md:left-[38%]    flex flex-col overflow-hidden  items-center bg-white w-[350px] h-[350px]  lg:w-[700px] sm:w-[500px] sm:h-[500px]   lg:h-[700px]  rounded-[50%] shadow-md  py-2 px-6">
        
            <img
                src={profilepic}
                alt="profile_picture"
                className="md:w-[500px] md:h-[800px]   object-cover "
                /></div>
        <div class=" ml-20 z-10 user-text  inset-0  sm:mt-0 mt-20  md:my-auto   ">
                            <h6 className='text-3xl text-left'>👋 Hello, I am</h6>
                            <h1 className= 'lg:text-[140px] sm:text-[80px] text-[50px] font-bold  mt-0 text-left text-[#1877F2]'>Dikshant</h1>

                            <h2 className='text-left text-3xl mt-0'>
                            <TypeAnimation
                                    sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Web Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Designer',
                                    1000,
                                    'Web Creator',
                                    1000,
                                    
                                    ]}
                                    
                                    wrapper="span"
                                    speed={10}
                                    style={{ fontSize: '1em', display: 'inline-block' ,fontWeight: 'bold'}}
                                    repeat={Infinity}
                                />
                                 </h2> </div>
                            

        {/* Image Section */}
        

        
        
        
       
        
      
    
    
  </div>
);
  
}

export default Landing
