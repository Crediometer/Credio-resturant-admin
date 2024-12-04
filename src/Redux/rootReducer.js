import {combineReducers} from 'redux';
import authReducer from './Auth/Login/LoginReducer';
import { registerBusinessReducer, registerReducer } from './Auth/Signup/RegisterReducer';
import { otpReducer } from './Auth/Signup/OtpReducer';
import passwordReducer from './Auth/Signup/SavepasswordReducer';
const rootReducer = combineReducers({
    login: authReducer,
    register: registerReducer,
    businessregister: registerBusinessReducer,
    otp: otpReducer,
    passwordRegister: passwordReducer,
    // forgetotp: forgetotpReducer, 
    // form: formReducer,

})

export default rootReducer;