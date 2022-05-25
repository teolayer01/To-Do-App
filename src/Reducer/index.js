// Actions
import { AGREGAR_TODO, EDITAR_TODO, ELIMINAR_TODO } from "../Actions"

// Nuestro estado inicial
const initialState = [
    {
        id: 0,
        todo: "Primer todo"
    }
]

// obtiene nuestro estado inicial, el tipo de acción y su respuesta 
let reducer = (state = initialState, { type, payload }) => {
    let newTodos; // def nueva variable
    newTodos = [...state] // copia del state
    switch (type) {
        case AGREGAR_TODO:
            newTodos.push(payload) // agregamos nuevo todo al final
            return newTodos
        case EDITAR_TODO:
            let index = -1
            for(let i = 0; i < newTodos.length; i++) {
                index++
                if(newTodos[i].id === payload.id) {
                    break
                }
            }
            if(index !== -1) {
                newTodos[index] = payload
                return newTodos
            }
        case ELIMINAR_TODO: 
            // filtramos para esten solo los que tienen id diferente al especificado
            newTodos = newTodos.filter(t => t.id !== payload) 
            return newTodos  
        // SIEMPRE TIENE QUE ESTAR --> no sean Mati
        default: 
            return state
    }
}

export default reducer