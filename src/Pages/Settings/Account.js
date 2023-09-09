import { HiOutlineUser } from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2'
import ng from '../../Assets/ng.png'
import profile from '../../Assets/profile.png'
import './Account.css'
import { IoLocationOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
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
                                    <HiOutlineUser/>
                                    <input type='text' placeholder='First Name'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Last Name</label><br></br>
                                <div className="director-form-input">
                                    <HiOutlineUser/>
                                    <input type='text' placeholder='Last Name'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Email</label><br></br>
                                <div className="director-form-input">
                                    <HiOutlineEnvelope/>
                                    <input type='text' placeholder='Email'></input>
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