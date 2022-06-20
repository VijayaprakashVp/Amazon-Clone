import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './Components/Homepage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        {/* <Route />
        <Route />
        <Route /> */}
      </Routes>
    </div>
  )
}

export default App
