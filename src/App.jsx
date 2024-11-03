import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/home';
import Apply from '@/pages/apply';
import './App.css';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
