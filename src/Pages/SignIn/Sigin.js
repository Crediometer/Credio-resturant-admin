// import '../Login/Login.css';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'
const Signin = () => {
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
                        <p className='login-welcome'>Create an account</p>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="phone">
                                <label>Name*</label><br></br>
                                <input
                                type="text"
                                name='phone'
                                placeholder='Enter your name'
                                required
                                ></input>
                            </div>
                            <div className="phone">
                                <label>Email*</label><br></br>
                                <input
                                type="email"
                                name='phone'
                                placeholder='Enter your Email'
                                required
                                ></input>
                            </div>
                            <div className="password">
                                <label>Password*</label><br></br>
                                <input
                                type='password'
                                name='password'
                                placeholder='*Create a Password'
                                required
                                ></input>
                            </div>
                            <Link to="/">
                                <div className="submit">
                                    <input 
                                    type="submit"
                                    name="submit"
                                    value="Get Started"
                                    ></input>
                                </div>
                            </Link>
                            <button className='google-login'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <g clip-path="url(#clip0_6014_37826)">
                                        <path d="M23.7682 12.5298C23.7682 11.7141 23.7021 10.8939 23.561 10.0914H12.2422V14.7124H18.7239C18.455 16.2028 17.5907 17.5212 16.3252 18.3589V21.3573H20.1922C22.463 19.2673 23.7682 16.1807 23.7682 12.5298Z" fill="#4285F4"/>
                                        <path d="M12.2391 24.2542C15.4756 24.2542 18.205 23.1915 20.1936 21.3573L16.3266 18.3589C15.2507 19.0909 13.8618 19.5053 12.2435 19.5053C9.11291 19.5053 6.45849 17.3933 5.50607 14.5536H1.51562V17.6446C3.55274 21.6968 7.70192 24.2542 12.2391 24.2542Z" fill="#34A853"/>
                                        <path d="M5.50473 14.5536C5.00206 13.0633 5.00206 11.4495 5.50473 9.95911V6.86816H1.51869C-0.183313 10.2589 -0.183313 14.2538 1.51869 17.6446L5.50473 14.5536Z" fill="#FBBC04"/>
                                        <path d="M12.2391 5.00302C13.9499 4.97656 15.6034 5.62032 16.8425 6.80202L20.2685 3.37597C18.0991 1.33886 15.2198 0.218891 12.2391 0.254166C7.70192 0.254166 3.55274 2.81158 1.51562 6.86817L5.50166 9.95911C6.44967 7.11509 9.1085 5.00302 12.2391 5.00302Z" fill="#EA4335"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6014_37826">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.253357)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sign in with Google
                            </button>
                            <div className="account">
                                <p className="signin">Already have an account? <Link to="/"><span>Log in</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Signin;
