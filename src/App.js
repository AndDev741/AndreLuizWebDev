import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Render from './PagesEn/Render';
import RenderPt from './PagesPt/RenderPt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/en' element={<Render />} />
        <Route path='/' element={<RenderPt />} />
        <Route path='/pt' element={<RenderPt />} />
      </Routes>
    </div>
  );
}

export default App;
