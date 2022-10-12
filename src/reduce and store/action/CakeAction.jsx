export const cakeAdd = (dispatch,amount) => {
    return dispatch({
        type: 'add',
        amount
    })
    
}
export const cakeRemove = (dispatch,amount) => {
    return dispatch({
        type: 'remove',
        amount
    })
    
}
export const toggleAction = (dispatch) => {
    return dispatch({
        type: 'toggle'
    })
    
}