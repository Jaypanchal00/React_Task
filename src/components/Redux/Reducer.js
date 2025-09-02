const arr = []
export const myReducer = (state = arr, action) => {
    if (action.type == "Add") {
        state = [...state, action.data]
    } else if (action.type == "Delete") {
        const newArr = [...state]
        newArr.splice(action.data, 1)
        return newArr
    } else if (action.type == "Edit") {
        const { i, newValue } = action.data
        const newArr = [...state]
        newArr[i] = newValue
        return newArr
    }
    return state
}