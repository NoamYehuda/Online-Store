export const editCart = ({type, item, numItem}) => {
    return (
        {
            type,
            item: {
                ...item,
                amount: numItem
            }
        }
    )
}


export const removeItem = (item) => (
    {
        type: 'REMOVE_FROM_CART',
        id: item.id
    }
)


export const removeAll = () => (
    {
        type: 'REMOVE_ALL'
    }
)
