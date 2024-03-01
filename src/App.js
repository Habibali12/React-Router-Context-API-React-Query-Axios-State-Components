import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './components/Navbar';

export const AppContext = createContext();


function App() {
  const [userName, setuserName] = useState("Habib Ali Khan");


  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setuserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
