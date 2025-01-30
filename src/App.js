import './App.css';
import {Routes, Route } from 'react-router-dom';
import Render from './Page/Render';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Render />} />
      </Routes>
    </div>
  );
}

export default App;
