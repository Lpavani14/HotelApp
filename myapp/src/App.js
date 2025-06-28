import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AddHotel from './pages/AddHotel';
import HotelList from './components/HotelList';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/hotels" element={<HotelList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
