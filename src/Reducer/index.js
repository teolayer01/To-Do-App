// Nuestro estado inicial
const initialState = [
    {
        id: 0,
        name: "Lavar los platos"
    },
    {
        id: 1,
        name: "Hacer la hw"
    },
    {
        id: 2,
        name: "Bañarme"
    }
]

// obtiene nuestro estado inicial, el tipo de acción y su respuesta
export let reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default: 
            return state
    }
}

export default initialState