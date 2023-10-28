import { FiCopy, FiX } from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import food from '../../Assets/food.jpeg'
import './OrderModal.css'
import { useState } from 'react';
const OrderModal = ({toggle}) => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        // Get the text from the <p> element
        const textToCopy = document.querySelector('.order-number');

        // Check if the <p> element exists
        if (textToCopy) {
        // Create a temporary input element to copy the text to the clipboard
        const copyInput = document.createElement('input');
        copyInput.value = textToCopy.innerText;
        document.body.appendChild(copyInput);
        copyInput.select();
        document.execCommand('copy');
        document.body.removeChild(copyInput);

        // Update the state to indicate that the text has been copied
        setCopied(true);

        // Reset the "Copied" message after a short delay
        setTimeout(() => {
            setCopied(false);
        }, 1500);
        }
    };
    return ( 
        <div className="modal-background">
            <div className="modal order-modal">
                <div className="order-modal-top">
                    <p className='order-number'>9348fjr73<span onClick={handleCopyClick}><FiCopy/></span></p>
                    {copied ? <span className='copied'>Copied!</span> : null}
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
                                    value="CupCake"
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Categories'
                                    value="Lunch"
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Product Size'
                                    value="Small"
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-2">
                                <input
                                    type='text'
                                    placeholder='Selling price'
                                    value="NGN 5000"
                                    disabled
                                >
                                </input>
                                <input
                                    type='text'
                                    placeholder='NGN 9,000'
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Order Type'
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Discount Percentage'
                                    disabled
                                >
                                </input>
                            </div>
                            <div className="order-form-1">
                                <input
                                    type='text'
                                    placeholder='Method of Payment'
                                    disabled
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
                    <button className='order-ok'  onClick={toggle}>OK</button>
                    <button className='order-share'>Share</button>
                </div>
            </div>
        </div>
    );
}
 
export default OrderModal;