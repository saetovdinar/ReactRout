import './App.css';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';
import DriftPage from './components/DriftPage';
import HomePage from './components/HomePage';
import ForzaPage from './components/ForzaPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

