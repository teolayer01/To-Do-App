import React, { useState } from "react"
import { agregarToDo } from "../Actions"
// genera uuids (tipo de id) --> npm i uuid
import { id as uuidv4 } from 'uuid'
import { useDispatch } from "react-redux"

const CrearToDo = () => {
    return (
        <div>
            <div>
                <input/>
                <button></button>
            </div>
        </div>
    )
}

export default CrearToDo