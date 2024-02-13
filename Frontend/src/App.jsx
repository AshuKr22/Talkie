import './App.css'
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login/Login'
import SignUp from './pages/Signup/SignUp'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
function App() {
  
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes> 
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/signup" element={<SignUp/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
      </Route>
      </Routes>
      <Toaster/>
    

    </div>

    </>
  )
}

export default App
