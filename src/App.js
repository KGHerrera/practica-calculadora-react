import './App.css';
import Logo from './images/logo.png'
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.js';
import BotonClear from './components/BotonClear.js';
import { useState } from "react";

import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () =>{
    try {
      setInput(evaluate(input));
    } catch (error) {
      console.log("jeje");
    }
    
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img src={Logo} className="logo" alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton clic={agregarInput}>1</Boton>
          <Boton clic={agregarInput}>2</Boton>
          <Boton clic={agregarInput}>3</Boton>
          <Boton clic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>4</Boton>
          <Boton clic={agregarInput}>5</Boton>
          <Boton clic={agregarInput}>6</Boton>
          <Boton clic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>7</Boton>
          <Boton clic={agregarInput}>8</Boton>
          <Boton clic={agregarInput}>9</Boton>
          <Boton clic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clic={calcularResultado}>=</Boton>
          <Boton clic={agregarInput}>0</Boton>
          <Boton clic={agregarInput}>-</Boton>
          <Boton clic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clic={() => setInput('')}>clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
