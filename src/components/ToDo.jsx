// useState --> crear un estado (no global)
import React, { useState } from "react"
// useDispatch --> despachar acciones (llevarlas a las actions)
import { useDispatch } from "react-redux"
// Actions
import { eliminarToDo, editarToDo } from "../Actions"

const ToDo = ({ todo }) => {
    const [editar, setEditar] = useState(false)
    const [newTodo, setNewTodo] = useState(todo.todo)
    const dispatch = useDispatch()

    let handleEditar = (e) => {
        e.preventDefault()
        dispatch(editarToDo({
            ...todo,
            todo: newTodo
        }))
        if(editar) {
            setNewTodo(todo.todo)
        }
        setEditar(!editar)
    }

    let handleChange = (e) => {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    let handleEliminar = (e) => {
        e.preventDefault()
        dispatch(eliminarToDo(todo.id))
    }

    return (
        <div>
            <div>
                <span>{todo.id}</span>
                <div>
                    {
                        editar ? 
                            <input 
                                type='text'
                                value={newTodo}
                                onChange={e => handleChange(e)}
                            />
                        :
                            <h2>{todo.todo}</h2>
                    }
                </div>
                <button
                    onClick={e => handleEditar(e)}
                >
                    {editar ? "Actualizar" : "Editar"}
                </button>
            </div>
            <div>
                <button
                    onClick={e => handleEliminar(e)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ToDo