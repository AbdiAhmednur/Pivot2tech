import React from 'react'
import {useState} from 'react'
import './HW4.css';

function App() {
    const [variable, setVariable] = useState(2)

    function multiply(){
        setVariable(variable*2)
    }

    function divide(){
        setVariable(variable/2)
    }

    function add(){
        setVariable(variable+1)
    }

    function subtract() {
      setVariable(variable-1)
    }

    return (
        <div>
          <h1>start count down</h1>
          <h1 className='var'>{variable}</h1>
          <button onClick={add}>up</button>
          <button onClick={subtract}>down</button>
        </div>
    );
}

export default App



// let (let i = 0; i < button, i++)