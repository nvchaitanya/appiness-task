//actionTypes
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE' 
export const LOGOUT = 'LOGOUT'

//actionCreators

export const loginRequest = (payload) => {
    return{
        type:LOGIN_REQUEST,
        payload
    }
}

export const loginSuccess = () => {
    return{
        type : LOGIN_SUCCESS
    }
}

export const loginFailure = () => {
    return{
        type: LOGIN_FAILURE,
    }
}

export const logout = () => {
    return{
        type:LOGOUT,
    }
}