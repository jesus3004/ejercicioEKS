import logo from './logo.svg';
import './App.css';
import imagen from './img/EKS_Logo2.png'
import React, { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Actualiza el título del documento
    document.title = `Numeros de clics ${count}`;
  });
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="gravity">
            <div className=" row">
              <div className="col-md-12 col-lg-12 col-sm-12 mt-3">
                <img className="logo mt-5 img-fluid" src={imagen} alt="Gravity" />
              </div>
            </div>
          </div>
          <div className='row' >
            <div className='col-md-6 col-lg-6 col-sm-12' >
              <button onClick={() => setCount(count + 1)} className='btn btn-success boton'>Aumentar </button>
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12' >
              <button onClick={() => setCount(count - 1)} className='btn btn-danger boton'>Decrementar</button>
            </div>
          </div>

          <div className='row' >
            <div className='col-12' >
              <h1>El conteo es:</h1>
            </div>
          </div>

          <div className='row m-5' >
            <div className='col-12' >
              <h1>{count}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
