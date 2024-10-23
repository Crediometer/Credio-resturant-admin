import table1 from "../../Assets/table1.png"
const Garden = () => {
    return ( 
        <div className="garden-arrange garden-page">
            <div className="title-arrange">
                <div className="arrange-tag garden">
                    <p>Garden</p>
                </div>
            </div>
            <div className="sits bar-sits">
                <div className="sits-row roof-sits-row">
                    <div className="sit-image">
                        <img src={table1}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Garden;