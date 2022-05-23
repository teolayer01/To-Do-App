import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// reportWebVitals --> Reporta estado de web  en la terminal y el navegador al guardar cambios
import reportWebVitals from './reportWebVitals';
// Provider --> Permite que el store este disponible en cualquier componente de la app
import { Provider } from 'react-redux'
// store --> nuestro estado global
import store from './Store/index'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
