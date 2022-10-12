const toggleReducer = (state = true, action) => {
    switch (action.type) {
        case 'toggle':
            return state = !state
        default : return state
    } 
}
export default toggleReducer