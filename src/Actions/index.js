export const AGREGAR_TODO = 'AGREGAR_TODO';
export const EDITAR_TODO = 'EDITAR_TODO';
export const ELIMINAR_TODO = 'ELIMINAR_TODO';

export let agregarToDo = (todo) => {
    return {
        type: AGREGAR_TODO,
        payload: todo
    }
}

export let editarToDo = (todo) => {
    return {
        type: EDITAR_TODO,
        payload: todo
    }
}

export let eliminarToDo = (todo) => {
    return {
        type: ELIMINAR_TODO,
        payload: todo
    }
}

