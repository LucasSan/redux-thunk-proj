const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = initialState, action) => {
    if (action.type === 'LOAD_UA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    } else if (action.type === 'LOAD_UA_SUCCESS') {
        return {
            isFetching: false,
            data: action.data,
            error: false
        }
    } else if (action.type === 'LOAD_UA_ERROR') {
        return {
            isFetching: false,
            data: [],
            error: true
        }
    }

    return state;
}

export default ua;
