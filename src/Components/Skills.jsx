import React from 'react'

const Skills = () => {
  return (
    // Main Div that Contains Two div 
    <div className='mb-20 w-[100vw]'>
        <div className='mt-20'>
            <p className='lg:text-5xl text-[35px] font-bold '>Experience</p>
        </div>


        <div className='w-[90vw] flex mb-10 lg:flex lg:flex-row  flex-col '>
        
        {/* Div for Tech Stack Images */}
        <div className='w-full   techstack lg:w-[50%] mt-8  p-8 justify-end items-center mx-auto '>
            <img className='mx-auto my-auto w-[200px] h-[200px] rounded-[50%] border-[1px] border-black items-end'    src="https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.jpg"></img>
            
        </div>
        {/* Details Tab */}
        <div className='w-full px-20  lg:p-8 lg:w-[50%] ml-0'>
            <p className='lg:text-4xl text-[25px] font-bold text-left mt-8'>ADP</p>
            <div className='lg:flex md:flex-row flex flex-col   justify-between lg:text-3xl text-[25px] mt-4 '>
                <p className='text-left'>Member Technical</p>
                <p className='text-[#ABABAB] lg:text-3xl text-[20px] px-8 ' >Aug 23-Sept-24</p>
                
            </div>
            <ul className='text-left mt-6 text-black lg:text-xl text-[18px] ' >
                <li className='mb-2 '>
                • Gained hands-on experience in React JS, Spring Boot, JDBC,and JavaScript.
                </li>
                <li className='mb-2 '>
                • Developed Reusable and Responsive Frontend Components using Reactjs .
                </li>
                <li  className='mb-2 '>
                • Trained on Agile Methodologies for Efficient project Management.
                </li>
                <li  className='mb-2 '>
                • Implemented Tailwind CSS for streamlined frontend development, optimizing code efficiency and
                enhancing UI design .
                </li>
                
            </ul>
            

        </div>
        {/* Projects */}
        

        
      
    </div>
    </div>
    
  )
}

export default Skills
