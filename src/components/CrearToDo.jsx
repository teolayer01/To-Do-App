import React, { useState } from "react"
import { agregarToDo } from "../Actions"
// genera uuids (tipo de id) --> npm i uuid
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from "react-redux"

const CrearToDo = () => {
    // generamos un estado local que comience vacio
    let [todo, setTodo] = useState('')
    // llamamos dispatch
    let dispatch = useDispatch()

    // hacemos que lo que escribamos, se guarde en el estado local
    let handleChange = (e) => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    // cuando lo mandamos (enter), lo despacha a las actions
    let handleSubmit = (e) => {
        e.preventDefault()
        if(todo !== '') {
            // generamos el objeto
            dispatch(agregarToDo({
                // id nuevo cada
                id: uuidv4(),
                // todo --> estado local
                todo: todo
            }))
        }
        // cuando lo despachamos, seteamos el estado local a su comienzo
        setTodo('')
    }

    return (
        <div>
            <div>
                <input
                    value={todo}
                    onChange={(e) => handleChange(e)}
                    type='text'
                />
            </div>
            <div>
                <button
                    onClick={(e) => handleSubmit(e)}
                >Agregar</button>
            </div>
        </div>
    )
}

export default CrearToDo

