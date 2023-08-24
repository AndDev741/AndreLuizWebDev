import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Render from './PagesEn/Render';
import RenderPt from './PagesPt/RenderPt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/en' Component={Render} />
        <Route exact path='/pt' Component={RenderPt} />
      </Routes>
    </div>
  );
}

export default App;
