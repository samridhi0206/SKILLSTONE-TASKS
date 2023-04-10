import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [Val,setVal]=useState(0);
  const [clear,setClear]=useState(false);

 useEffect(() => {
    if (clear) {
      document.querySelector('#result').value="";
    }
  }, [clear]);

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let addition=document.getElementById("num").value
    if(addition==='')
    return;
    let sum= Val+parseInt(addition);
    setVal(sum);
    document.getElementById("num").value="";
      
  }

  const Sub=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let subtraction=document.getElementById("num").value
    if(subtraction==='')
    return;
    let sum= Val-parseInt(subtraction);
    setVal(sum);
    document.getElementById("num").value="";
      
  }

  const Mul=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let multiplication=document.getElementById("num").value
    if(multiplication==='')
    return;
    let sum= Val*parseInt(multiplication);
    setVal(sum);
    document.getElementById("num").value="";
      
  }

  const Div=(e)=>{    
    e.preventDefault();
    if(clear) setClear(false);
    let division=document.getElementById("num").value
    if(division==='')
    return;
    let sum= Val/parseInt(division);
    setVal(sum);
    document.getElementById("num").value="";
      
  }

  const Clear=(e)=>{    
    e.preventDefault();
    setClear(true);
    setVal(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h2>Calculator</h2>
      </div>
      <form>           
            <p id="result" > Result : {Val}</p>
            <input type="number" id="num"  /><br></br><br></br>
            <button onClick={Add}>Addition</button><br></br>
            <button onClick={Sub}>Subtraction</button><br></br>
            <button onClick={Mul}>Multiplication</button><br></br>
            <button onClick={Div}>Division</button><br></br>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;

 
  