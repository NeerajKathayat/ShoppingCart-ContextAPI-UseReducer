import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
import Home from './assets/Home'
import Context from './context/Context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './assets/CartPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<Router>
        <Context>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Cart' element={<CartPage/>}  />
          </Routes>
        </Context>
   </Router>
    
         
    </div>
  )
}

export default App
