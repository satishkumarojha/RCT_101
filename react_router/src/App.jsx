import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import{Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Home} from './components/Home';
import { Products } from './components/Products';
import { Product } from './components/Product';
import {Error} from './components/Error'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path="*" element={<Error/>}/>


      </Routes>
    </div>
  )
}

export default App
