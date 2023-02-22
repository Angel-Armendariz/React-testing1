import React from 'react';
import { Routes, Route} from 'react-router-native';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
    </Routes>
  );
}

export default App;
