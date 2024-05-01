import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'
import Home from './Home/Home'
import TodoApp from './TodoApp/TodoApp'
import Contact from './Contact/Contact'
import Service from './Service/Service'

function App() {

  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='TodoApp' element={<TodoApp/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='service' element={<Service/>} />
      </Routes>
      <Footer/>
      </HashRouter>
    </>
  )
}

export default App
