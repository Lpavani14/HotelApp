import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AddHotel from './pages/AddHotel';
import HotelList from './components/HotelList';
// ✅ import Navbar

function App() {
  return (
    <Router>
       {/* ✅ Navbar shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/login" element={<Login />} /> {/* If needed */}
      </Routes>
    </Router>
  );
}

export default App;
