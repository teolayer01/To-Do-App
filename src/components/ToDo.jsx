// useState --> crear un estado (no global)
import React, { useState } from "react"
// useDispatch --> despachar acciones (llevarlas a las actions)
import { useDispatch } from "react-redux"
// Actions
import { eliminarToDo, editarToDo } from "../Actions"
const ToDo = () => {
    return (
        <div>
            <div>
                <span></span>
                <div></div>
                <button>Editar</button>
            </div>
            <button>Eliminar</button>
        </div>
    )
}

export default ToDo