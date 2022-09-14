import logo from './logo.svg';
import './App.css';
import {useEffect, useLayoutEffect, useState} from "react";
import Demo13 from './component/demo13'

function App() {
  const [value ,setValue] = useState(0)
  useEffect(()=>{
      if (value == 0) {
          setValue(10+ Math.random()*200)
      }
  })
  console.log("render", value)
  return (
    <div className="App">
      <h1>learn useEffect & useLayoutEffect, see console</h1>
        <div onClick={()=>setValue(0)}>value : {value}</div>
        <Demo13/>
    </div>
  );
}

export default App;
