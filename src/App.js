import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import MyCalculator from './components/Calculator';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';

function App() {
  return (
    <div className="parent-container">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math" element={<MyCalculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
