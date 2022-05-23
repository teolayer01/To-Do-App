// createStore --> crea un store que contiene todos los estados de los componentes de la app
// applyMiddleware --> permite aplicar un middleware (canal de comunicación)
import { createStore, applyMiddleware } from 'redux'
// thunk --> middleware que permite trabajar con metodos dispatch y getState
import thunk from 'redux-thunk'
// composeWithDevTools --> activa la extención para ver nuetros componentes 
import { composeWithDevTools } from 'redux-devtools-extension'
// reducer --> permite cambiar los estados
import reducer from '../Reducer/index'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store