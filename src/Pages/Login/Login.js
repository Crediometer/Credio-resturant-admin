import './login.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { Switch } from 'antd';
import { useState } from 'react';
import { connect } from 'react-redux';
import LottieAnimation from '../../lotties';
import loader from "../../Assets/animations/loading.json"
import { LoginAuthAction } from '../../Redux/Auth/Login/LoginAction';
import { loginotpData } from '../../Redux/Auth/Signup/OtpAction';
const Login = ({loading,otpData, data, error,login,otpLoading, otpdata, otperror}) => {
    const history = useNavigate();
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState("")
    const[isOpen ,setIsOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [type, setType] = useState('password');
    const [password, setPassword] = useState("");
    const [showerror, setshowerror] = useState(false)
    const [loginState, setLoginState] = useState({});
    const toggle = (checked) => {setIsOpen (checked);}

    const handleNumber = (e) => {
        const value = e.target.value;
        setEmail(value);
        setLoginState({ ...loginState, ...{email} });
    };
    const handlePassword = (e) => {
        const value = e.target.value;
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPassword(value);
        setLoginState({ ...loginState, ...{password:value} });
    };
    const handleOtp = (e) =>{
        const value = e.target.value
        setOtp(value)
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setshowerror(false)
        try{
            await login(loginState, ()=>{ 
                setStep(step + 1)
            }, ()=>{ 
                setshowerror(true) 
            });
        }catch(error){
        }
    };
    const handleVerifyOtp = (e) =>{
        e.preventDefault();
        setshowerror(false)
        otpData(
            {
                email,
                requestId:data.data.requestId,
                otp    
            }, ()=>{ 
                history("/dashboard")
                setshowerror(false)
            },  ()=>{ 
                setshowerror(true)
            }
        )
    }
    return ( 
        <div className="login-page">
            <div className="login-left">
                <div className="group-lower">
                    <div className="group-lower-inner">
                        <div className="group-outer">
                            <div className="group">
                                <p>Savor the Perfect Restaurant Experience</p>
                            </div>
                        </div>
                        <div className="lorem-outer">
                            <p className='lorem'>Experience dining at its finest with seamless service, exquisite flavors, and a welcoming ambiance. Every moment is designed to make your visit effortless and unforgettable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-form-section">
                <div className="login-form-section-inner">
                    <div className="welcome">
                        <div className="login-logo">
                            <img src={logo}></img>
                        </div>
                        <p className='login-welcome'>Log in to your account</p>
                        <p className="login-subtext">Welcome back! Please enter your details.</p>
                    </div>
                    <div className="login-form">
                        
                       {step === 1 && 
                            <form onSubmit={handleLogin}>
                                <div className="phone">
                                    <label>Email</label><br></br>
                                    <input
                                    type="email"
                                    name='phone'
                                    placeholder='Enter Email'
                                    onChange={handleNumber}
                                    onBlur={handleNumber}
                                    required
                                    ></input>
                                </div>
                                <div className="password">
                                    <label>Password</label><br></br>
                                    <input
                                    type='password'
                                    name='password'
                                    placeholder='*************'
                                    required
                                    onChange={handlePassword}
                                    onBlur={handlePassword}
                                    ></input>
                                </div>
                                {/* {isOpen && <div className="phone">
                                    <label>OTP</label><br></br>
                                    <input
                                    type="tel"
                                    name='phone'
                                    placeholder='Enter your OTP'
                                    required
                                    ></input>
                                </div>} */}
                                <p className="signin" style={{marginTop: "5px", marginBottom: "10px"}}>Always keep me logged in <Switch checked={isOpen} onChange={toggle}/></p>
                                <div className="submit">
                                    <button disabled={loading}>
                                        {loading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Login"}
                                    </button>
                                </div>
                                <div className="account">
                                    <p className="signin">Don’t have an account yet ? <Link to='/signin'><span>Sign up </span></Link></p>
                                </div>
                            </form>
                        }
                        {step === 2 && 
                            <form onSubmit={handleVerifyOtp}>
                                <div className="phone">
                                    <label>OTP</label><br></br>
                                    <input
                                    type="tel"
                                    name='otp'
                                    placeholder='Enter your OTP'
                                    onChange={handleOtp}
                                    value={otp}
                                    required
                                    ></input>
                                </div>
                                <p className="signin" style={{marginTop: "5px", marginBottom: "10px"}}>Always keep me logged in <Switch checked={isOpen} onChange={toggle}/></p>
                                <div className="submit">
                                    <button disabled={otpLoading}>
                                        {otpLoading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Login"}
                                    </button>
                                </div>
                                <div className="account">
                                    <p className="signin">Don’t have an account yet ? <Link to='/signin'><span>Sign up </span></Link></p>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.login?.error,
        loading: state?.login?.dataAdded,
        data:state?.login?.token,
        otpLoading: state.otp.loading,
        otperror: state.otp.error,
        otpdata: state.otp.data,
        // getprofile: state?.getprofile?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
        
        otpData: (postdata, history, error) => {
            dispatch(loginotpData(postdata, history, error));
        },
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
