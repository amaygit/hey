import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Generator from './components/Generator'
const App = () => {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
      <div className='container mt-2'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/generate' element={<Generator />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
