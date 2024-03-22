
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from './pages/Login'
import Choosenewplan from "./pages/Choosenewplan";
import About from "./pages/About";
function App() {
  

  return (
    <>
      <div>
        <Navbar></Navbar>
      <Routes>
      <Route path='/'  element={<Login/>} />
      <Route path='/plans'  element={<Choosenewplan/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/login'  element={<Login/>} />
        </Routes>
    

    <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
