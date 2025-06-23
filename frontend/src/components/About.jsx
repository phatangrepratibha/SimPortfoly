import React from 'react'

const About = () => {
  return (
    <>
                 <p className='w-1/6 mx-auto font-bold text-2xl font-sans  py-4 mt-20 bg-pink-300 text-center mask-conic-from-lime-50 rounded-4xl'>
  About Me
</p>
        <div className="grid grid-cols-2 gap-4  " id='about'>
          <div className='herosec text-black py-35 px-30' >
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet obcaecati cum ad corporis dicta odio deserunt? Ipsum quos velit fugiat eius fugit, accusamus, asperiores nesciunt eligendi unde expedita totam.</p>
          </div>
       
        <div className=" ml-20 mt-25 rounded-lg"><img src="img/h.jpg" alt="" height="200px" width="400px " />    </div>

      </div>
    </>
  )
}

export default About
