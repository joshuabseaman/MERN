import './App.css';
import { Routes, Route } from "react-router-dom";
import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets'

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
