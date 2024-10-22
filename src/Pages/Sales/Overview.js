import { styled } from '@mui/material/styles';
import { FaChevronRight, FaDotCircle, FaRegFilePdf } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import OverviewGraph from "../../Components/Graph/OverviewGraph";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


function createData(status, cardDetails, type, amount, date, name) {
return { status, cardDetails, type, amount, date, name };
}

const rows = [
createData(0, "Visa card  **** 4831", 0, 5000.00, "Jan 17, 2022", "Jenny Wilson"),
createData(0, "Master card  **** 4831", 0, 50000.00, "Jan 17, 2022", "Devon Lane"),
createData(1, "Account  **** 4831", 1, 2000.00, "Jan 17, 2022", "jgraha.com"),
createData(2, "Verve card  **** 4831", 0, 3000.00, "Jan 17, 2022", "Dianne Russell"),
createData(1, "Account card  **** 4831", 0, 1000.00, "Jan 17, 2022", "Odin Shadow"),,
];


const Overview = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 8,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[200],
        //   ...theme.applyStyles('dark', {
        //     backgroundColor: theme.palette.grey[800],
        //   }),
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: '#4F46E5',
        //   ...theme.applyStyles('dark', {
        //     backgroundColor: '#308fe8',
        //   }),
        },
      }));
    return ( 
        <div className="overview">
            <div className="overview-top">
                <div className="overview-graph">
                    <div className="overview-graph-top">
                        <p className="overview-head">Sales Reports</p>
                        <div className="overview-graph-filter">
                            <div className="timeline">
                                <p>12 Months</p>
                            </div>
                            <div className="timeline">
                                <p>6 Months</p>
                            </div>
                            <div className="timeline">
                                <p>30 Days</p>
                            </div>
                            <div className="timeline">
                                <p>7 Days</p>
                            </div>
                        </div>
                        <div className="export-overview">
                            <FaRegFilePdf/>
                            <p>Export PDF</p>
                        </div>
                    </div>
                    <div className="overview-graph-inner">
                        <OverviewGraph/>
                    </div>
                </div>
                <div className="overview-traffic">
                    <div className="overview-traffic-top">
                        <p className="overview-head">Traffic Sources</p>
                    </div>
                    <div className="overview-traffic-body">
                        <div className="traffic">
                            <div className="traffic-top">
                                <p>Rice</p>
                                <p>24</p>
                            </div>
                            <div className="traffic-bar">
                                <BorderLinearProgress variant="determinate" value={80} />
                            </div>
                        </div>
                        <div className="traffic">
                            <div className="traffic-top">
                                <p>Coke</p>
                                <p>20</p>
                            </div>
                            <div className="traffic-bar">
                                <BorderLinearProgress variant="determinate" value={60} />
                            </div>
                        </div>
                        <div className="traffic">
                            <div className="traffic-top">
                                <p>Efo</p>
                                <p>10</p>
                            </div>
                            <div className="traffic-bar">
                                <BorderLinearProgress variant="determinate" value={30} />
                            </div>
                        </div>
                        <div className="traffic">
                            <div className="traffic-top">
                                <p>Eba</p>
                                <p>5</p>
                            </div>
                            <div className="traffic-bar">
                                <BorderLinearProgress variant="determinate" value={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview-bottom">
                <div className="overview-transaction">
                    <div className="overview-transaction-top">
                        <p className="overview-head">Transactions</p>
                        <Link to="/dashboard/transaction">
                            <div className="transaction-link">
                                <p>See All Transactions</p>
                                <FaChevronRight/>
                            </div>
                        </Link>
                    </div>
                    <div className="overview-transaction-body">
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {(row.status == 0)?(
                                            <div className="transaction-completed">
                                                <div></div>
                                                <p>Completed</p>
                                            </div>
                                        ): (row.status == 1)?(
                                            <div className="transaction-pending">
                                                <div></div>
                                                <p>Pending</p>
                                            </div>
                                        ):(
                                            <div className="transaction-failed">
                                                <div></div>
                                                <p>Canceled</p>
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell align="left">
                                        <p className='card-details'>{row.cardDetails}</p>
                                        <p className='card-type'>{(row.type == 0)?"Card payment":"Bank payment"}</p>
                                    </TableCell>
                                    <TableCell align="left">
                                        <p className='card-details'>NGN {row.amount}</p>
                                        <p className='card-type'>{row.date}</p>
                                    </TableCell>
                                    <TableCell align="left"><p className='card-type'>{row.name}</p></TableCell>
                                    <TableCell align="right"><HiOutlineDotsHorizontal/></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className="overview-customer">
                    <div className="overview-transaction-top">
                        <p className="overview-head">Recent Customers</p>
                    </div>
                    <div className="overview-customer-body">
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="overview-customer-body">
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <div className="customer">
                            <div className="customer-left">
                                <img src="https://unsplash.com/photos/man-standing-near-wall-T4-_zzN0tKA"></img>
                                <div className="customer-details">
                                    <h6>Jenny Wilson</h6>
                                    <p>w.lawson@example.com</p>
                                </div>
                            </div>
                            <div className="customer-right">
                                <h6>NGN 11,00</h6>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="overview-customer-bottom">
                        <p>SEE ALL CUSTOMER</p>
                        <FaChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Overview;