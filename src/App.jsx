import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SplashPage from './pages/home/SplashPage';
import { Events } from './pages/events/Events';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;