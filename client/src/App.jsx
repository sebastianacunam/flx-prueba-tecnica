import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/assets/scss/app.css";


import Home from '../src/components/Home/Home.jsx'

function App() {
  
  return (
  
    <Router>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </Router>
  
  )
}

export default App
