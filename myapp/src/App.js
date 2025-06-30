import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';     //  public landing page
import Home from './pages/Home';             // after login dashboard
import Login from './pages/Login';
import AddHotel from './pages/AddHotel';
import HotelList from './components/HotelList';
import BookingPage from './pages/Bookingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />      {/* Public homepage */}
        <Route path="/login" element={<Login />} />    {/* Login route */}
        <Route path="/home" element={<Home />} />      {/* After login */}
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/book/:hotelId" element={<BookingPage />} />

      </Routes>
    </Router>
  );
}

export default App;
