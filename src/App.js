import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PieChart from './pages/PieChart';
import BarChart from './pages/BarChart';
import Home from './pages/Home';
import Admin from './pages/Admin'
import Navbar from './Navbar';
import SideNavbar from './pages/SideNavbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/charts/piechart" element={<PieChart />} />
          <Route path="/charts/barchart" element={<BarChart />} />
        </Routes>
      </BrowserRouter >
    </>

  );
}

export default App;
