import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'


// components
import Home from './components/Home';
let timer = 0
const root = ReactDOM.createRoot(document.getElementById('root'))
//forzando el renderizado cada un segundo
setInterval(() => {

// reseteo al llegar a 999999
  if (timer > 999999) timer = 0;

  root.render(
    <React.StrictMode>
      <Home timer={timer} />
    </React.StrictMode>,
  )
  timer++
}, 1000) //el setInerval crea un intervalo de tiempo (en milisegundos) donde lo que este en el bloque de codigo, se va a repetir