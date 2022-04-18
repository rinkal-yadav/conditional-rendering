import { useState } from 'react';
import './App.css';
import ClassCompo from './Component/ClassCompo';
import FunctionCompo from './Component/FunctionCompo';

function App() {
  const [btn,setBtn]=useState(false)
  const ButtonSubmit=()=>{
    setBtn(!btn)
    
  }
  return (
    <>
     <span className='App'>
     <button  className='button' onClick={ButtonSubmit}> Click here for check the conditional rendering.</button>
      {
        btn ? <FunctionCompo/> : <ClassCompo/>
      }
     </span>
    </>
  );
}

export default App;
