import { FiCopy, FiX } from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import food from '../../Assets/food.jpeg'
import './OrderModal.css'
const OrderModal = ({toggle}) => {
    return ( 
        <div className="modal-background">
            <div className="modal order-modal">
                <div className="order-modal-top">
                    <p className='order-number'>9348fjr73<span><FiCopy/></span></p>
                    <div className="modal-close" onClick={toggle}>
                        <FiX/>
                    </div>
                </div>
                <div className="order-modal-body">
                    <div className="order-modal-left">
                        <p className='order-title'>Order Details</p>
                        <form>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Product name'
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Categories'
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Product Size'
                                >
                                </input>
                            </div>
                            <div className="order-form-2">
                                <input
                                    type='text'
                                    placeholder='Selling price'
                                >
                                </input>
                                <input
                                    type='text'
                                    placeholder='NGN 9,000'
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Order Type'
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Discount Percentage'
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                
                                <input
                                    type='text'
                                    placeholder='Method of Payment'
                                >
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className="order-modal-right">
                        <img src={food}></img>
                    </div>
                </div>
                <div className="order-modal-button">
                    <button className='order-cancle' onClick={toggle}>Cancle</button>
                    <button className='order-ok'>OK</button>
                    <button className='order-share'>Share</button>
                </div>
            </div>
        </div>
    );
}
 
export default OrderModal;