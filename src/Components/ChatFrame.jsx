import React, { useState } from 'react'

const ChatFrame = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const checkIfAtBottom = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };
  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    
      useState(() => {
        window.addEventListener("scroll", checkIfAtBottom);
        return () => window.removeEventListener("scroll", checkIfAtBottom);
      }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-50 px-4 sm:px-6 lg:px-8  ">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Take a Coffee & chat with me</h1>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
      <div className="flex items-center bg-pink-100 p-4 rounded-md w-full sm:w-auto">
        <span className="w-8 h-8 bg-pink-500 text-white flex items-center justify-center rounded-full mr-2">
          <img src='https://pxdraft.com/wrap/kanye/assets/img/email.png'></img>
        </span>
        <span className="text-gray-800 font-semibold text-xl">dikshantparasar@gmail.com</span>
      </div>

      <div className="flex items-center bg-blue-100 p-4 rounded-md w-full sm:w-auto">
        <span className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-2">
           <img src='https://pxdraft.com/wrap/kanye/assets/img/phone.png'></img>
        </span>
        <span className="text-gray-800 font-semibold text-xl">+91  9467686369</span>
      </div>
    </div>

    <form className="w-full max-w-xl bg-white p-6 rounded-md shadow-md mb-20">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full sm:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full sm:w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Your Message here"
        rows="4"
        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
      >
        SEND INQUIRY
      </button>
    </form>
    {isAtBottom && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          ↑ Back to Top
        </button>
      )}
  </div>
  )
}

export default ChatFrame
