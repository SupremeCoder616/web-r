import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
