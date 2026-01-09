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
import Login from './Components/Login.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>

        

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Shows' element={<Shows />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path="/New & Popular" element={<New />} />
          <Route path="/Mylist" element={<Mylist />} />
          <Route path='/Browse by Language' element={<Browse />} />
          <Route path='/Telugu' element={<Telugu />} />
          <Route path='/Malayalam' element={<Malayalam />} />
          <Route path='/English' element={<English />} />
          <Route path='/Korean' element={<Korean />} />
          <Route path='/' element={<Login/>}/>
          
        </Routes>

       

        


      </div>
    </>

  )
}

export default App
