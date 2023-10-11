import './App.css';
import {Routes, Route } from 'react-router-dom';
import Render from './PagesEn/Render';
import RenderPt from './PagesPt/RenderPt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/en' element={<Render />} />
        <Route exact path='/' element={<RenderPt />} />
      </Routes>
    </div>
  );
}

export default App;
