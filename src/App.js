import './App.css';
import imagenFlor from './imagenes/imagen-flor.png';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';


function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
      setInput (input + val);
    };




  return (
    <div className= 'App'>
      <div className = 'flor-logo-contenedor'>
        <img 
            src= {imagenFlor}
            className= 'flor-logo' 
            alt='Logo flor' />
      </div>
      <div className= 'contenedor-calculadora'>
        <Pantalla imput= {input}/>
      <div className= 'fila'> 
        <Boton manejarClic= {agregarInput}> 1 </Boton>
        <Boton manejarClic= {agregarInput}> 2 </Boton>
        <Boton manejarClic= {agregarInput}> 3 </Boton>
        <Boton manejarClic= {agregarInput}> + </Boton>
      </div>
      <div className= 'fila'> 
        <Boton manejarClic= {agregarInput}> 4 </Boton>
        <Boton manejarClic= {agregarInput}> 5 </Boton>
        <Boton manejarClic= {agregarInput}> 6 </Boton>
        <Boton manejarClic= {agregarInput}> - </Boton>
      </div>
      <div className= 'fila'>
        <Boton manejarClic= {agregarInput}> 7 </Boton>
        <Boton manejarClic= {agregarInput}> 8 </Boton>
        <Boton manejarClic= {agregarInput}> 9</Boton>
        <Boton manejarClic= {agregarInput}> * </Boton>
      </div>
      <div className= 'fila'> 
        <Boton manejarClic= {agregarInput}> = </Boton>
        <Boton manejarClic= {agregarInput}> 0 </Boton>
        <Boton manejarClic= {agregarInput}> . </Boton>
        <Boton manejarClic= {agregarInput}> / </Boton>
      </div>
      <div className= 'fila'>
        <BotonClear>Clear</BotonClear>
      </div>
    </div>
   </div>
  );
}

export default App;
