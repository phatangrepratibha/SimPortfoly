import React from 'react'

const Finanace = () => {
  return (
    <>
         
            <div className=" bg-white py-12 px-6 md:px-20">
                <h1 className="text-4xl font-bold text-center text-[rgb(72,11,72)] mb-6">
                   Finance Management System
                </h1>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                   This project is a web-based finance management system designed to help users efficiently track and manage their personal or business finances. It allows users to log income and expenses, categorize transactions, set budgets, and generate detailed financial reports. Built using React for the frontend and PHP for the backend, the platform provides a user-friendly interface with real-time updates and secure data handling. The system simplifies financial planning by giving users clear insights into their spending patterns and helping them make informed financial decisions.
                </p>


                {/* Screenshots Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
                    <img
                        src="/img/fc.jpeg"
                        alt="Screenshot 1"
                        className="h-100 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="/img/fc1.jpeg "
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
                        <li>Express.js for server-side routing</li>
                        <li>MongoDB backend and database operations</li>
                        <li>Bootstrap and Tailwand css for styling</li>
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

export default Finanace
