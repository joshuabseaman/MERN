import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Multiple from './components/Multiple';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:textColor/:backgroundColor" element={<Multiple />} />
      </Routes>
    </div>
  );
}

export default App;
