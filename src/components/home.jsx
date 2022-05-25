import React from "react";
import CrearToDo from "./CrearToDo";
import ToDoList from "./ToDoList";

const Home = () => {
    return (
        <div>
            <h1>My To-Dos</h1>
            <CrearToDo/>
            <ToDoList/>
        </div>
    )
}

export default Home