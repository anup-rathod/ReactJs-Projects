import './App.css'
import Add from './components/Add'
import Edit from './components/Edit'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/create' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
