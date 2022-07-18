import { useReducer, useState } from "react";
import { View, Text, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import theme from "../../constants/theme";
import { styles } from "./style"; 
import { Input } from "../../components/index";
import { useDispatch } from "react-redux";
import { signup, sigin } from '../../store/actions/auth.actions'
import { onInputChange, UPDATED_FORM, onFocusOut } from "../../utils/forms";

const initialState = {
    email: { value: '', touched: false, hasError: true, error:'' }, 
    password: { value: '', touched: false, hasError: true, error:'' }, 
    isFormValid: false
}

const formReducer = (state, action)=> {
    switch (action.type) {
        case UPDATED_FORM:
            const { name, value, hasError, error, touched, isFormValid} = action.data
            return{
                ...state,
                [name]:  {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched
                },
                isFormValid
            }
        default:
            return state
    }

}

const AuthScreen = () => {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const title= isLogin ? 'Login' : 'Register'
    const message = isLogin ? "Don't you have an account?" : 'Do you have an account?'
    const messageAction = isLogin ? 'Register' : 'Login'

    const onHandlerAuth = () => {
        dispatch( isLogin ? sigin(email, password) : signup(email, password))
    }

    onHandlerChange = (text, type) => {
        onInputChange(type, text, dispatchFormState, formState)
    }

    const onBlurInput = (text, type) => {
        onFocusOut(type, text, dispatchFormState, formState)
    }   

    const handleChangeAuth = ()=> {
        setIsLogin(!isLogin)
    }
    return(
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input 
                    placeholder='example@gmail.com'
                    placeholderTextColor={theme.colors.textColor}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={text => onHandlerChange(text, 'email')}
                    onBlur={(e) => onBlurInput(e.nativeEvent.text, 'email')}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    label='Email'
                />
                <Input 
                    style={styles.input}
                    placeholder='******'
                    placeholderTextColor={theme.colors.textColor}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={text => onHandlerChange(text, 'password')}
                    onBlur={(e) => onBlurInput(e.nativeEvent.text , 'password')}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    label='Password'
                />
                <Button title={title} color={theme.colors.primary} onPress={onHandlerAuth}/>
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
export default AuthScreen