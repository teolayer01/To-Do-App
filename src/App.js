import React from 'react';
import './App.css';
// BrowserRouter --> permite utilizar rutas, historiales y otros hooks
// Routes --> Contenedor de Route - Especifica que vamos a utilizar rutas
// Routes --> Ruta especifica con ubicación y elementos a renderizar
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Componentes
import Credits from './components/credits';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/credits' element={<Credits/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
