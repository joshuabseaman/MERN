import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {
  const [currentColor, setCurrentColor] = useState("");
  const [colorList, setColorList] = useState([]);

  const requestedColor = ( newColor ) => {
    setCurrentColor( newColor )
    setColorList([...colorList,newColor])
  }

  return (
    <div className="App">
      <BoxForm onNewColor={requestedColor}/>
      <DisplayBox box={currentColor} colorList={colorList}/>
    </div>
  );
}

export default App;