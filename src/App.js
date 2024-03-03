import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext();


function App() {
  const [userName, setuserName] = useState("Habib Ali Khan");

  const client = new QueryClient();

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setuserName }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div >
  );
}

export default App;
