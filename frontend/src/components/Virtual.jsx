import React from 'react'
import Navbar from './Navbar'

const Virtual = () => {
  return (
   
    <>
       
       <div className=" bg-white py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-[rgb(72,11,72)] mb-6">
        Virtual Try-On 
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        This project is an augmented reality-based virtual try-on app. It overlays clothing items on the user's live camera feed using React, Three.js, and body-tracking technologies. Users can try different clothes virtually before making a purchase.
      </p>

      {/* Screenshots Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
        <img
          src="/img/b5.png"
          alt="Screenshot 1"
          className="h-100 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
        />
        <img
          src="/img/b6.png "
          alt="Screenshot 2"
          className="h-100 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Tech Stack & Details */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-[rgb(72,11,72)] mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React.js</li>
          <li>MongoDB for database management</li>
          <li> TensorFlow for body tracking</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6">
        <a
          href="#"
          className="bg-[rgb(72,11,72)] text-white px-6 py-2 rounded-lg hover:bg-[rgb(90,20,90)] transition duration-300"
        >
          View Live Demo
        </a>
      
      </div>
    </div>
    </>
  )
}

export default Virtual
