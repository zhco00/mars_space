import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/home';
import Apply from '@/pages/apply';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="mars_space">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
