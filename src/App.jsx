import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import { Home } from './Pages/Home'
import { UpdateBook } from './Pages/UpdateBook'
import { CreateBook } from './Pages/CreateBook'
import axios from 'axios'
import dotenv from "dotenv"
import './style.css'
function App() {

  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  console.log(import.meta.env.VITE_BASE_URL)

  return (
    <div className='app'>
      <Link to="/">
        <button>
          Rudr Book Shop
        </button>
      </Link>
    
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/createBook' element={<CreateBook />} />
        <Route path='/updateBook/:id' element={<UpdateBook />} />
      </Routes>
    </div>
  )
}

export default App
