import React from "react"
// useSelector --> traer el estado inicial (hook)
import { useSelector } from "react-redux"
import ToDo from "./ToDo"

const ToDoList = () => {
    // traemos el estado global y su contenido
    let todos = useSelector(state=>state)

    return (
        <div>
            {
                todos.map(t => {
                    return <ToDo key={t.id} todo={t}/>
                })
            }
        </div>
    )
}

export default ToDoList