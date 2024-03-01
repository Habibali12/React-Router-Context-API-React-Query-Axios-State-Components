import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './components/Navbar';

function App() {
  const [userName, setuserName] = useState("Habib Ali Khan");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={userName} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile username={userName} setusername={setuserName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
