import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'
import Virtual from './components/Virtual'
import Finanace from './components/Finanace'
import EventM from './components/EventM'
import Pet from './components/Pet'



function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
      <Route path="/virtual" element={<Virtual/>}/>
       <Route path="/finance" element={<Finanace/>}/>
      <Route path="/event" element={<EventM/>}/>
       <Route path="/pet" element={<Pet/>}/>
      
     </Routes>
      {/* <Footer/> */}
     </BrowserRouter>
    
    </>
  )
}

export default App
