const itemsReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            return [
                ...state,
                action.item,
            ]

        case 'UPDATE_CART':   
            const items = state.filter((item) => item.id !== action.item.id)
            return [
                ...items,
                action.item
            ]

        case "REMOVE_FROM_CART":
            const newCart = state.filter((item) => item.id !== action.id)

            return newCart

        case "EDIT_AMOUNT":
            return state.map((item) => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        ...action.amount
                    } 
                } else {
                    return item
                }
            })

        case 'REMOVE_ALL':
            return []

        default:
            return state
    }
}

export default itemsReducers