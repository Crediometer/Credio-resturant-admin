import './Receipt.css'
import logo from '../../../Assets/logo.png'
import logo2 from '../../../Assets/logo2.png'
import barcode from '../../../Assets/barcode.png'
const ReceiptCard = () => {
    return ( 
        <div className="receipt-outer">
            <div className="receipt-card">
                <div className="receipt-logo">
                    <img src={logo}></img>
                    <img src={logo2}></img>
                    <p className="receipt-contact">
                    Address: Futa South gate, Akure. ondo state
                    </p>
                    <p className="receipt-contact">Tell: 0905893743</p>
                </div>
                <div className="receipt-body">
                    <div className="receipt-table-outer">
                        <table className='receipt-table'>
                            <thead>
                                <tr>
                                    <th className='quantity-head'>Qty</th>
                                    <th className='item-head'>item</th>
                                    <th className='price-head'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Soft Drink</td>
                                    <td>NGN3,000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Fish and Rice</td>
                                    <td>NGN893,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Buscuit</td>
                                    <td>NGN3,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="receipt-totals">
                        <div className="totals">
                            <p className="total-head">Total</p>
                            <p className="total-head">NGN 40,000</p>
                        </div>
                        <div className="totals">
                            <p className="total-body">Tax</p>
                            <p className="total-body">NGN 3000</p>
                        </div>
                        <div className="totals">
                            <p className="total-body">TOTAL + Tax</p>
                            <p className="total-body">NGN 43,000</p>
                        </div>
                    </div>
                </div>
                <div className="receipt-footer">
                    <p>THANK YOU!</p>
                    <img src={barcode}></img>
                </div>
            </div>
            <div className="receipt-button">
                <button className="not-select">Not Selected</button>
            </div>
        </div>
     );
}
 
export default ReceiptCard;