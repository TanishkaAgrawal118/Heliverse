import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
