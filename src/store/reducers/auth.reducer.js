import { authTypes } from "../types/auth.types";

<<<<<<< HEAD
const { SIGN_UP, SIGN_IN} = authTypes;
=======
const { SIGN_UP, SIGN_IN, SIGN_ERROR } = authTypes;
>>>>>>> develop

const initialState = {
    token: null,
    userId: null,
<<<<<<< HEAD
}

const AuthReducer = (state = initialState, action) => {
=======
    error: false,
    message: '',
}
 
const authReducer = (state = initialState, action) => {
>>>>>>> develop
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGN_IN:
<<<<<<< HEAD
            return{
=======
            return {
>>>>>>> develop
                ...state,
                token: action.token,
                userId: action.userId,
            }
<<<<<<< HEAD
=======
        case SIGN_ERROR:
            return {
                ...state,
                error: action.error,
                message: action.message,
            }
>>>>>>> develop
        default:
            return state;
    }
}

<<<<<<< HEAD
export default AuthReducer;
=======
export default authReducer;
>>>>>>> develop
