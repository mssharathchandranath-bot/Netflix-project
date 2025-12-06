import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'
import Shows from './Components/Shows.jsx'
import Movies from './Components/Movies.jsx'
import New from './Components/New.jsx'
import Mylist from './Components/Mylist.jsx'
import logo from "./assets/logo.png"
import Browse from './Components/Browse.jsx'
import Telugu from './Components/Telugu.jsx'
import Malayalam from './Components/Malayalam.jsx'
import English from './Components/English.jsx'
import Korean from './Components/Korean.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>

        <div className='header'>
          <li><img className='pic' src={logo} alt="Netflix logo" /></li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/Shows"}>
            <li>Shows</li>
          </Link>

          <Link to={"/Movies"}>
            <li>Movies</li>
          </Link>

          <Link to={"/New & Popular"}>
            <li>New & Popular</li>
          </Link>

          <Link to={"/Mylist"}>
            <li>Mylist</li>
          </Link>

          <Link to={"/Browse by Language"}>
            <li>Browse by Language</li>
          </Link>


          <div className='header'>
            <li><img className='pi' src="data:image/png;base64,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" alt="search logo" /></li>
            <li><img className='pi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwVSHv8IRJvhAakUyG6YeBwayz6KbxhaJIg&s" alt="bell logo" /></li>
            <li></li>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shows' element={<Shows />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path="/New & Popular" element={<New />} />
          <Route path="/Mylist" element={<Mylist />} />
          <Route path='/Browse by Language' element={<Browse />} />
          <Route path='/Telugu' element={<Telugu />} />
          <Route path='/Malayalam' element={<Malayalam />} />
          <Route path='/English' element={<English />} />
          <Route path='/Korean' element={<Korean />} />
        </Routes>

        <Footer />


      </div>
    </>

  )
}

export default App
