export const myAction = (data) => {
    return {
        type: "Add",
        data
    }
}
export const deleteAction = (data) => {
    return {
        type: "Delete",
        data
    }
}
export const editAction = (i,newValue) => {
    return {
        type: "Edit",
        data:{i,newValue}
    }
}
