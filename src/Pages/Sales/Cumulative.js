import { HiOutlineFunnel } from "react-icons/hi2";
import { IoMdFunnel } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoColumns, GoRows } from "react-icons/go";
import { FiPrinter, FiUpload } from "react-icons/fi";

const Cumulative = () => {
    return ( 
        <div className="cumulative">
            <div className="cumulative-top transaction-table-top">
                <div className="transaction-top-filter">
                    <div className="filter-sort">
                        <HiOutlineFunnel />
                        <p>Filter</p>
                    </div>
                    <div className="filter-sort">
                        <IoMdFunnel />
                        <p>Sort</p>
                    </div>
                    <div className="column">
                        <GoColumns />
                    </div>
                    <div className="row">
                        <GoRows/>
                    </div>
                    <div className="filter-search">
                        <CiSearch/>
                        <input
                        placeholder="Search menu..."
                        >
                        </input>
                    </div>
                </div>
                <div className="transaction-top-print">
                    <FiPrinter />
                    <FiUpload />
                </div>
            </div>
            <div className="cumulative-body">
                <div className="cumulative-section">
                    <div className="cumulative-type type-sales">
                        <p>SALES</p>
                    </div>
                    <div className="cumulative-section-inner">
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cumulative-total">
                        <p>Total = NGN  900,000</p>
                    </div>
                </div>
                <div className="cumulative-section">
                    <div className="cumulative-type type-tips">
                        <p>TIPS</p>
                    </div>
                    <div className="cumulative-section-inner">
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cumulative-total">
                        <p>Total = NGN  900,000</p>
                    </div>
                </div>
                <div className="cumulative-section">
                    <div className="cumulative-type type-labour">
                        <p>Labour cost</p>
                    </div>
                    <div className="cumulative-section-inner">
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed in-cash">
                                    <div></div>
                                    <p>In cash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cumulative-total">
                        <p>Total = NGN  900,000</p>
                    </div>
                </div>
                <div className="cumulative-section">
                    <div className="cumulative-type type-other">
                        <p>Others</p>
                    </div>
                    <div className="cumulative-section-inner">
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h5>NGN  5000.00</h5>
                            <div className="ticket-card-inner">
                                <p>Jan 17, 2022</p>
                                <div className="transaction-completed">
                                    <div></div>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cumulative-total">
                        <p>Total = NGN  900,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cumulative;