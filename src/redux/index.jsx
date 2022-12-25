export const authActionCreator = () => {
    return {
        type: 'AUTH',
        payload: true
    }
}

export const unauthActionCreator = () => {
    return {
        type: 'AUTH',
        payload: false
    }
}