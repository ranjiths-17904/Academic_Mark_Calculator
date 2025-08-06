import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Navbar from './components/Navbar';
// import './index.css';

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-darkBg text-gray-800 dark:text-lightText transition-all">
        <Router>
          <Navbar toggleDark={() => setDark(!dark)} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
