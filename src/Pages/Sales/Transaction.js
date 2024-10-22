import { useState } from "react";
import { HiOutlineFunnel } from "react-icons/hi2";
import { IoMdFunnel } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoColumns, GoRows } from "react-icons/go";
import { FiPrinter } from "react-icons/fi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Checkbox } from "antd";


function createData(status, cardDetails, type, amount, date, name, account, menu) {
    return { status, cardDetails, type, amount, date, name, account,menu };
}
    
const rows = [
    createData(0, "Visa card  **** 4831", 0, 5000.00, "Jan 17, 2022", "Jenny Wilson", "0090987876","Rice and Chicken"),
    createData(0, "Master card  **** 4831", 0, 50000.00, "Jan 17, 2022", "Devon Lane", "8890987578","Bread and Tea"),
    createData(1, "Account  **** 4831", 1, 2000.00, "Jan 17, 2022", "jgraha.com","1132432312","Eba and Efo Riro"),
    createData(2, "Verve card  **** 4831", 0, 3000.00, "Jan 17, 2022", "Dianne Russell", "9098788574","Apple Pie"),
    createData(1, "Account card  **** 4831", 0, 1000.00, "Jan 17, 2022", "Odin Shadow","9890987898",'Pounded Yam'),,
];
const Transaction = () => {
    const [selected, setselected] = useState(false)

    const handlePeriod = () =>{
        setselected(!selected)
    }
    return ( 
        <div className="transaction">
            <p className="transaction-head">Transactions</p>
            <div className="transaction-body">
                <div className="transaction-table-top">
                    <div className="transaction-top-period">
                        <div onClick={handlePeriod} className={selected ? "period selected-period" : "period"}>
                            <p>All</p>
                        </div>
                        <div onClick={handlePeriod} className={!selected ? "period selected-period" : "period"}>
                            <p>Last Month</p>
                        </div>
                    </div>
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
                    </div>
                </div>
                <div className="transaction-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell><Checkbox/></TableCell>
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
                                <TableCell align="left"><p className='card-type'>{row.account}</p></TableCell>
                                <TableCell align="left"><p className='card-type'>{row.menu}</p></TableCell>
                                <TableCell align="right"><HiOutlineDotsHorizontal/></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
 
export default Transaction;