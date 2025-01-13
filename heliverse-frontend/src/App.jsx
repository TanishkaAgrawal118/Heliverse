import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/layouts/SignIn'
import Home from './Components/layouts/Home'
import NavigationBar from './Components/layouts/NavigationBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/navbar' element={<NavigationBar/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
