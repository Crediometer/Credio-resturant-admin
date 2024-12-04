// import '../Login/Login.css';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaAddressBook } from 'react-icons/fa';
import { addFormData, registerBusinessData, registerData } from '../../Redux/Auth/Signup/RegisterAction';
import { connect, useDispatch } from 'react-redux';
import { otpData } from '../../Redux/Auth/Signup/OtpAction';
import { passwordData } from '../../Redux/Auth/Signup/SavepasswordAction';
import LottieAnimation from '../../lotties';
import loader from "../../Assets/animations/loading.json"
const Signin = ({
    registerData, 
    otpData, 
    personalData, 
    loading, 
    data, 
    error, 
    otpLoading, 
    otpdata, 
    otperror,
    personalError,
    personalLoading,
    personaldata,
    businessData,
    businessloading,
    businesserror,
    businessdata
}) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [showerror, setshowerror] = useState(false)
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [phone, setPhone] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName,  setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [password, setPassword] = useState("")
    const [hours, setHours] = useState("")
    const [resturantName, setResturantName] = useState("")
    const [resturantPhone, setResturantPhone] = useState("")
    const [resturantCAC, setResturantCAC] = useState("")
    const [resturantAddress, setResturantAddress] = useState("")

    const handleEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }
    const handleOtp = (e) =>{
        const value = e.target.value
        setOtp(value)
    }
    const handlePhone = (e) =>{
        const value = e.target.value
        setPhone(value)
    }
    const handleFirstName = (e) =>{
        const value = e.target.value
        setFirstName(value)
    }
    const handleLastName = (e) =>{
        const value = e.target.value
        setLastName(value)
    }
    const handleAddress = (e) =>{
        const value = e.target.value
        setAddress(value)
    }
    const handleCountry = (e) =>{
        const value = e.target.value
        setCountry(value)
    }
    const handleCity = (e) =>{
        const value = e.target.value
        setCity(value)
    }
    const handleState = (e) =>{
        const value = e.target.value
        setState(value)
    }
    const handlePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
    }
    const handleResName = (e) =>{
        const value = e.target.value
        setResturantName(value)
    }
    const handleResCAC = (e) =>{
        const value = e.target.value
        setResturantCAC(value)
    }
    const handleResPhone = (e) =>{
        const value = e.target.value
        setResturantPhone(value)
    }
    const handleResAddress = (e) =>{
        const value = e.target.value
        setResturantAddress(value)
    }
    const handleHours = (e) =>{
        const value = e.target.value
        setHours(value)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        setshowerror(false)
        registerData(
            {email}, ()=>{ 
            // setPending(true);
            setStep(step + 1)
            setshowerror(false)
            dispatch(addFormData(email));
        },  ()=>{ 
            setshowerror(true)
        })
    }
    const handleVerifyOtp = (e) =>{
        e.preventDefault();
        setshowerror(false)
        otpData(
            {
                email,
                requestId:data.data.requestId,
                otp    
            }, ()=>{ 
                setStep(step + 1)
                setshowerror(false)
            },  ()=>{ 
                setshowerror(true)
            }
        )
    }
    const handlePeronalData = (e) =>{
        e.preventDefault();
        setshowerror(false)
        personalData(
            {
                email,
                firstName,
                lastName,
                street: address,
                city,
                country,
                state,
                password,
                verificationRequestId: otpdata.data.verificationRequestId
            }, ()=>{ 
                setStep(step + 1)
                setshowerror(false)
            },  ()=>{ 
                setshowerror(true)
            }
        )
    }
    const handleBusinessData = (e) =>{
        e.preventDefault();
        setshowerror(false)
        personalData(
            {
                restaurantName: resturantName,
                businessHours: hours,
                phoneNumber: resturantPhone,
                businessAddress:resturantAddress,
                cacNumber:resturantCAC
            }, ()=>{ 
                history("/")
                setshowerror(false)
            },  ()=>{ 
                setshowerror(true)
            }
        )
    }
    const handlnext =()=>{
        setStep(step + 1)
        if(step === 3){
            history("/")
        }
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
                            <img src={logo}/>
                        </div>
                        <p className='login-welcome'>{step === 3 ? "Enter Business Information" : "Create an Account"}</p>
                    </div>
                    {step === 0 && 
                        <div className="login-form">
                            <form onSubmit={handlesubmit}>
                                {showerror && (
                                    <div className="error-box">
                                        <p>{error}</p>
                                    </div>
                                )}
                                <div className="phone">
                                    <label>Email*</label><br></br>
                                    <input
                                    type="email"
                                    name='email'
                                    placeholder='Enter your Email'
                                    required
                                    onChange={handleEmail}
                                    value={email}
                                    ></input>
                                </div>
                                <div className="submit">
                                    <button disabled={loading}>
                                        {loading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Get Started"}
                                    </button>
                                </div>
                                <div className="account">
                                    <p className="signin">Already have an account? <Link to="/"><span>Log in</span></Link></p>
                                </div>
                            </form>
                        </div>
                    }
                    {step === 1 && 
                        <div className="login-form">
                            <form onSubmit={handleVerifyOtp}>
                                {showerror && (
                                    <div className="error-box">
                                        <p>{otperror}</p>
                                    </div>
                                )}
                                <div className="phone">
                                    <label>OTP*</label><br></br>
                                    <input
                                    type="text"
                                    name='otp'
                                    placeholder='Enter your OTP number'
                                    required
                                    onChange={handleOtp}
                                    value={otp}
                                    ></input>
                                </div>
                                {/* <div className="password">
                                    <label>Password*</label><br></br>
                                    <input
                                    type='password'
                                    name='password'
                                    placeholder='*Create a Password'
                                    required
                                    ></input>
                                </div> */}
                                <div className="submit">
                                    <button disabled={otpLoading}>
                                        {otpLoading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Continue"}
                                    </button>
                                </div>
                                <div className="account">
                                    <p className="signin">Already have an account? <Link to="/"><span>Log in</span></Link></p>
                                </div>
                            </form>
                        </div>
                    }
                    {step === 2 && 
                        <div className="login-form">
                            <form onSubmit={handlePeronalData}>
                                {showerror && (
                                    <div className="error-box">
                                        <p>{personalError}</p>
                                    </div>
                                )}
                                <div className="director-form-2">
                                    <div className="phone">
                                        <label>First Name*</label><br></br>
                                        <input
                                        type="text"
                                        name='first_name'
                                        placeholder='Enter your first name'
                                        required
                                        onChange={handleFirstName}
                                        value={firstName}
                                        ></input>
                                    </div>
                                    <div className="phone">
                                        <label>Last Name*</label><br></br>
                                        <input
                                        type="text"
                                        name='last_name'
                                        placeholder='Enter your last name'
                                        required
                                        onChange={handleLastName}
                                        value={lastName}
                                        ></input>
                                    </div>
                                </div>
                                <div className="password">
                                    <label>Password*</label><br></br>
                                    <input
                                        type='password'
                                        placeholder='*Enter your password'
                                        required
                                        onChange={handlePassword}
                                        value={password}
                                    ></input>
                                </div>
                                <div className="password">
                                    <label>Street*</label><br></br>
                                    <input
                                        type='text'
                                        placeholder='*Enter youe personal address'
                                        required
                                        onChange={handleAddress}
                                        value={address}
                                    ></input>
                                </div>
                                <div className="password">
                                    <label>City*</label><br></br>
                                    <input
                                        type='text'
                                        name='city'
                                        placeholder='*Enter your city'
                                        required
                                        onChange={handleCity}
                                        value={city}
                                    ></input>
                                </div>
                                <div className="director-form-2">
                                    <div className="phone">
                                        <label>Country*</label><br></br>
                                        <input
                                        type="text"
                                        name='country'
                                        placeholder='Enter your country'
                                        required
                                        onChange={handleCountry}
                                        value={country}
                                        ></input>
                                    </div>
                                    <div className="phone">
                                        <label>State*</label><br></br>
                                        <select 
                                            required
                                            onChange={handleState}
                                            value={state}
                                        >
                                            <option disabled selected>--Select State--</option>
                                            <option value="Abia">Abia</option>
                                            <option value="Adamawa">Adamawa</option>
                                            <option value="Akwa Ibom">Akwa Ibom</option>
                                            <option value="Anambra">Anambra</option>
                                            <option value="Bauchi">Bauchi</option>
                                            <option value="Bayelsa">Bayelsa</option>
                                            <option value="Benue">Benue</option>
                                            <option value="Borno">Borno</option>
                                            <option value="Cross River">Cross River</option>
                                            <option value="Delta">Delta</option>
                                            <option value="Ebonyi">Ebonyi</option>
                                            <option value="Edo">Edo</option>
                                            <option value="Ekiti">Ekiti</option>
                                            <option value="Enugu">Enugu</option>
                                            <option value="FCT">Federal Capital Territory</option>
                                            <option value="Gombe">Gombe</option>
                                            <option value="Imo">Imo</option>
                                            <option value="Jigawa">Jigawa</option>
                                            <option value="Kaduna">Kaduna</option>
                                            <option value="Kano">Kano</option>
                                            <option value="Katsina">Katsina</option>
                                            <option value="Kebbi">Kebbi</option>
                                            <option value="Kogi">Kogi</option>
                                            <option value="Kwara">Kwara</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Nasarawa">Nasarawa</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Ondo">Ondo</option>
                                            <option value="Osun">Osun</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Plateau">Plateau</option>
                                            <option value="Rivers">Rivers</option>
                                            <option value="Sokoto">Sokoto</option>
                                            <option value="Taraba">Taraba</option>
                                            <option value="Yobe">Yobe</option>
                                            <option value="Zamfara">Zamfara</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="submit">
                                    <button disabled={personalLoading}>
                                        {personalLoading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Continue"}
                                    </button>
                                </div>
                                {/* <div className="account">
                                    <p className="signin">Already have an account? <Link to="/"><span>Log in</span></Link></p>
                                </div> */}
                            </form>
                        </div>
                    }
                     {step === 3 && 
                        <div className="login-form">
                            <form onSubmit={handleBusinessData}>
                                <div className="director-form-2">
                                    <div className="phone">
                                        <label>Name of Resturant*</label><br></br>
                                        <input
                                        type="text"
                                        name='name_of_resturant'
                                        placeholder='Enter your resturant name'
                                        required
                                        onChange={handleResName}
                                        value={resturantName}
                                        ></input>
                                    </div>
                                    <div className="phone">
                                        <label>Phone Number*</label><br></br>
                                        <input
                                        type="text"
                                        name='business_phone'
                                        placeholder='Enter your phone number'
                                        required
                                        onChange={handleResPhone}
                                        value={resturantPhone}
                                        ></input>
                                    </div>
                                </div>
                                <div className="password">
                                    <label>Email*</label><br></br>
                                    <input
                                    type='text'
                                    name='resturant_email'
                                    placeholder='*Enter your email'
                                    required
                                    onChange={handleResCAC}
                                    value={resturantCAC}
                                    ></input>
                                </div>
                                <div className="password">
                                    <label>Business Hours*</label><br></br>
                                    <input
                                    type='text'
                                    name='business_hour'
                                    placeholder='*Enter your resturant working hour'
                                    required
                                    onChange={handleHours}
                                    value={hours}
                                    ></input>
                                </div>
                                <div className="director-form-2">
                                    <div className="phone">
                                        <label>Business Address*</label><br></br>
                                        <input
                                        type="text"
                                        name='business address'
                                        placeholder='Enter your business address'
                                        required
                                        onChange={handleResAddress}
                                        value={resturantAddress}
                                        ></input>
                                    </div>
                                </div>
                                <div className="submit">
                                    <button disabled={businessloading}>
                                        {businessloading ? (
                                            <LottieAnimation data={loader}/>
                                        ):"Continue"}
                                    </button>
                                </div>
                                {/* <div className="account">
                                    <p className="signin">Already have an account? <Link to="/"><span>Log in</span></Link></p>
                                </div> */}
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        loading:state.register.loading,
        error:state?.register?.error,
        data: state.register.data,
        businessloading:state.businessregister.loading,
        businesserror:state?.businessregister?.error,
        businessdata: state.businessregister.data,
        otpLoading: state.otp.loading,
        otperror: state.otp.error,
        otpdata: state.otp.data,
        personalLoading: state.passwordRegister.loading,
        personalError:state?.passwordRegister?.error,
        personalData: state.passwordRegister.data,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        registerData: (postdata, history, error) => {
            dispatch(registerData(postdata, history, error));
        },
        otpData: (postdata, history, error) => {
            dispatch(otpData(postdata, history, error));
        },
        personalData: (postdata, history, error) => {
            dispatch(passwordData(postdata, history, error));
        },
        businessData: (postdata, history, error) => {
            dispatch(registerBusinessData(postdata, history, error));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
