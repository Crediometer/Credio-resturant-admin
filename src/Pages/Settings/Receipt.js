import ReceiptCard from "../../Components/Card/ReceiptCard.js/Receipt";
import './Receipt.css'
const Receipt = () => {
    return ( 
        <div className="receipt">
            <ReceiptCard/>
            <ReceiptCard/>
            <ReceiptCard/>
        </div>
    );
}
 
export default Receipt;