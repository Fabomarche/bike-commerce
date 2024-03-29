import React, { useReducer, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import theme from '../../constants/theme';
import { Input } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { signup, signin } from "../../store/actions/auth.action";
import { onInputChange, onFocusOut, UPDATE_FORM } from '../../utils/form';

const initialState = {
    email: { value: '', touched: false, hasError: true, error: '' },
    password: { value: '', touched: false, hasError: true, error: '' },
    inFormValid: false
}
const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            }
        default:
            return state;
    }
}

const AuthScreen = () => {

    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const signUpError = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const title = isLogin ? 'Login'  :'Register';
    const message = isLogin ? "Don't you have an account?" : 'Do you have an account?';
    const messageAction = isLogin ? 'Register' : 'Login';


    const onHandlerAuth = () => {
        if(isLogin){
            if(formState.email.hasError === false && formState.password.hasError === false) {
                dispatch(signin(formState.email.value, formState.password.value))
            }
        } else {
            if(formState.email.hasError === false && formState.password.hasError === false) {
                console.log(signUpError.message)
                dispatch(signup(formState.email.value, formState.password.value))
            }
        }
    }

    const onHandleChange = (text, type) => {
        onInputChange(type, text, dispatchFormState, formState);
    }

    const onBlurInput = (text, type) => {
        onFocusOut(type, text, dispatchFormState, formState);
    }

    const handleChangeAuth = () => {
        signUpError.error = false
        setIsLogin(!isLogin);
    }


    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input 
                    placeholder='example@gmail.com'
                    placeholderTextColor={theme.colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'email')}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    label='Email'
                />
                <Input 
                    placeholder='********'
                    placeholderTextColor={theme.colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onEndEditing={(e) =>  onBlurInput(e.nativeEvent.text, 'password')}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    label='Password'
                />
                <TouchableOpacity onPress={onHandlerAuth} style={styles.authButton}>
                    <Text style={styles.authButtonText}>{title}</Text>
                </TouchableOpacity>
                {
                    signUpError.error &&
                    <Text style={styles.signError}>{signUpError.message}</Text> 
                }
                <View style={styles.propmt}>
                    <Text style={styles.propmtMessage}>{message}</Text>
                    <TouchableOpacity onPress={handleChangeAuth}>
                        <Text style={styles.propmtButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen;