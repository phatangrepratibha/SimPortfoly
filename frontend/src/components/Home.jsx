import React from 'react';
import About from './About';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 max-h-[520px] ">
        <div className=" p-4 rounded-lg">
          <div className='herosec text-black py-35 px-30' >
            <p className='d1 text-[rgb(72,11,72)] text-3xl font-bold'  >I'm</p>
            <h1 className='d2 text-4xl font-bold my-4'>Simran Phatangre</h1>

            <h3 className="text-4xl my-6  flex gap-2">
              <span className="opacity-0 animate-fade-in delay-1">Full Stack</span>
              <span className="opacity-0 animate-fade-in delay-2">Developer</span>
            </h3>

            <div className='d3 my-10 flex gap-4 '>
              <a href="#about"> <button className="btn btn-neutral btn-outline">About Me</button></a>

              <a href=" img/sim.pdf" download><button className="btn btn-soft btn-primary">Download CV</button></a>

            </div>


          </div>
        </div>
        <div className=" ml-40 mt-20 w-[500px] bg-pink-200 grid place-items-center ">
          <img src="img/h.jpg" alt="" height="400px" width="400px " />
        </div>

      </div>
      <hr />

      <div className="main mt-40 ">
        <p className='px-150 font-bold text-2xl font-sans '>My Services</p>
        <div className='ml-20 mt-10 grid grid-cols-4 gap-90 '>
          <div className="box1">
            <div className="card w-96  card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Frontend Design</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

          <div className="box1">
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Backend Design</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

          <div className="box1">
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title">UI/UX</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

        </div>
      </div>

      <About />
      <br></br>

    </>

  );
};

export default Home;