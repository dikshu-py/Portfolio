import React from 'react'
import Marquee from "react-fast-marquee";

const SlideWindow = () => {
  return (
    // <div   className='rfm-marquee' style="--play: running; --direction: normal; --duration: 19.54s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;">
    //     <div className='style="--transform: none;"'> 
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"/>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
    //         <img src="/assets/Java-CB3M9ThU.png" class="w-[73px] h-[97px]"></img>
            



    //     </div>
    // </div>
    <div className=" flex -col w-[100vw]  bg-gray-100 items-center justify-center">
     
      <div className="flex-col w-full bg-gray-100 py-4 ">
      <div className='my-20 w-full mx-auto items-center justify-center' >
        <p className='lg:text-5xl md:text-4xl  text-[22px] mx-auto font-bold'> Tech Stacks with Hand's On Exp.</p>
      </div>
        {/* Marquee Component */}
        <Marquee
          gradient={false} // Disable default gradient
          speed={80} // Set scroll speed
          className="text-white text-lg flex font-semibold"
        >
          <div className="flex gap-20">
          <img  className="p-2  w-[73px] h-[80px] " src="data:image/png;base64,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" ></img>
          <img className="p-2 w-[73px] h-[80px]  "    src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--html-programming-language-coding-logos-icons-1720087.png?f=webp&w=256" ></img>
          <img  className="p-2  w-[73px] h-[80px]  " src="https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=256"></img>
          <img  className="p-2  w-[73px] h-[80px]  " src="https://cdn.iconscout.com/icon/premium/png-512-thumb/react-9305891-7694090.png?f=webp&w=256" ></img>
          <img className="p-2  w-[73px] h-[80px]  " src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256"></img>
          <img className="p-2  w-[73px] h-[80px]  " src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000  "></img>
          <img className="p-2  w-[73px] h-[80px]  " src=" https://cdn.iconscout.com/icon/free/png-512/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256  "></img>
          <img className="p-2  w-[73px] h-[80px]  " src="  https://cdn.iconscout.com/icon/free/png-512/free-figma-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944870.png?f=webp&w=256 "></img>
          <img className="p-2  w-[73px] h-[80px]  " src=" https://cdn.iconscout.com/icon/free/png-512/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=256 "></img>
          
          
          </div>
        </Marquee>
      </div>
    </div>
  )
    
}

export default SlideWindow
