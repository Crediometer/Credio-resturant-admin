import './CustomFilter.css'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState } from 'react';
const CustomFilter = ({toggle, setvalue}) => {
    const handlevalue = (e) =>{
        setvalue(e.target.value)
    }
    const [value, setValue] = useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);
    return ( 
        <div className="customfilter">
            <div className="by-date">
                <p className="by-date-text">By Date</p>
                <div className="date-periods">
                    <div className="date-checkboxs">
                        <input type="radio" value='This Week' name="filter" onChange={handlevalue}></input>
                        <label>This Week</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='This Month' name="filter" onChange={handlevalue}></input>
                        <label>This Month</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='This Year' name="filter" onChange={handlevalue}></input>
                        <label>This Year</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Week</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Month</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Year</label>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="date-checkboxs custom-date-range">
                <input type="checkbox"></input>
                <label>Date Range</label>
            </div>
            <div className="date-range-picker">
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['StaticDateRangePicker']}>
                <DemoItem label="Static variant" component="StaticDateRangePicker">
                    <StaticDateRangePicker
                        defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                        sx={{
                        [`.${pickersLayoutClasses.contentWrapper}`]: {
                            alignItems: 'center',
                        },
                        }}
                    />
                </DemoItem>
                </DemoContainer>
            </LocalizationProvider> */}

            </div>
            <div className="custom-button">
                <button onClick={toggle}>Filter</button>
            </div>
        </div>
     );
}
 
export default CustomFilter;