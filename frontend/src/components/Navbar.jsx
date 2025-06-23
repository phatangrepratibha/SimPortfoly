import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
<h2 className="text-3xl font-bold mr-auto">
  <span className=" text-black">Sim</span><span className="italic">Folio</span>
</h2>

      </div>
      
      <div className="navbar-center font-medium">
        <a href='/' className="btn btn-ghost text-xl hover:text-primary transition-all duration-300 transform hover:scale-105">
          <span className="hover:underline underline-offset-8 decoration-2">Home</span>
        </a>
        
      
        
        <a href='/gallery' className="btn btn-ghost text-xl hover:text-primary transition-all duration-300 transform hover:scale-105">
          <span className="hover:underline underline-offset-8 decoration-2">Gallery</span>
        </a>
        
        <a href='/project' className="btn btn-ghost text-xl hover:text-primary transition-all duration-300 transform hover:scale-105">
          <span className="hover:underline underline-offset-8 decoration-2">Projects</span>
        </a>
        
        <a href='/contact' className="btn btn-ghost text-xl hover:text-primary transition-all duration-300 transform hover:scale-105">
          <span className="hover:underline underline-offset-8 decoration-2">Contact</span>
        </a>

        
      </div>
      
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item animate-pulse"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar