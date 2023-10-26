import { HiOutlineUser } from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2'
import ng from '../../Assets/ng.png'
import profile from '../../Assets/profile2.png'
import './Account.css'
import { IoLocationOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa'
const Account = () => {
    return ( 
        <div className="account">
            <div className="account-left">
                <div className="password-top">
                    <p className='password-head'>Password Settings</p>
                    <button className='password-change'>Change Password</button>
                </div>
                <div className="password-forms">
                    <p className='password-instruction'>Create a new password that is at least 8 <br></br>character long.</p>
                    <form>
                        <div className="password-form">
                            <label>Current Password</label><br></br>
                            <input type='password' placeholder='XXXXXXXXXX'></input>
                        </div>
                        <div className="password-form">
                            <label>Type your new password</label><br></br>
                            <input type='password' placeholder='New password'></input>
                        </div>
                        <div className="password-form">
                            <label>Retype your new password</label><br></br>
                            <input type='password' placeholder='Retype password'></input>
                        </div>
                        <div className="password-form-check">
                            <input type='checkbox'></input>
                            <label>Require all devices to sign in with new password</label>
                        </div>
                        <div className="password-save">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="account-right">
                <div className="director-info-top">
                    <p className='director-head'>Directors information</p>
                    <button className='director-update'>Update</button>
                </div>
                <div className="director-body">
                    <div className="director-forms">
                        <form>
                            <div className="director-form">
                                <label className='form-label'>First Name</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='Test'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Last Name</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='Venture'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Email</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                    <path d="M17.4014 7.35156L12.9581 10.9646C12.1186 11.6306 10.9375 11.6306 10.098 10.9646L5.61719 7.35156" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4089 19.5C19.4502 19.5084 21.5 17.0095 21.5 13.9384V7.07001C21.5 3.99883 19.4502 1.5 16.4089 1.5H6.59114C3.54979 1.5 1.5 3.99883 1.5 7.07001V13.9384C1.5 17.0095 3.54979 19.5084 6.59114 19.5H16.4089Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='TestVenture@gmail.com'></input>
                                </div>
                            </div>
                            <div className="director-form ">
                                <label>Phone Number</label><br></br>
                                <div className="director-form-2">
                                    <div className="director-form-country director-form">
                                        <div className="director-form-select">
                                            <p><span><img src={ng}></img></span>+234</p>
                                            <FiChevronDown/>
                                        </div>
                                    </div>
                                    <div className="director-form-phone">
                                        <div className="director-form-select">
                                        <input type='Text' placeholder='0908877565'></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Address</label><br></br>
                                <div className="director-form-input">
                                    <IoLocationOutline/>
                                    <input type='text' placeholder='Address'></input>
                                </div>
                            </div>
                             <div className="director-form">
                                <label>City</label><br></br>
                                <div className="director-form-input">
                                    {/* <IoLocationOutline/> */}
                                    <input type='text' placeholder='City'></input>
                                </div>
                            </div>
                            <div className="director-form director-form-2">
                                <div className="director-form-inner director-form">
                                    <label>Country</label><br></br>
                                    <div className="director-form-select">
                                        <p>Nigeria</p>
                                        <FiChevronDown/>
                                    </div>
                                </div>
                                <div className="director-form-inner">
                                    <label>State</label><br></br>
                                    <div className="director-form-select">
                                        <p>Ondo State</p>
                                        <FiChevronDown/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="director-image">
                        <img src={profile}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Account;