import "./AssignSit.css"
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { HiOutlineClock } from "react-icons/hi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbHourglassEmpty } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import dayjs from 'dayjs';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Calendar, Scheduler, useArrayState } from "@cubedoodl/react-simple-scheduler";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from "react";
const AssignSit = () => {
    const [selected, setSelected] = useState(new Date());
    const [events, setEvents, addEvent] = useArrayState();
    return ( 
        <div className="assign-sit">
            <div className="assign-sit-left">
                <div className="assign-calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                        'StaticDatePicker',
                        ]}
                    >
                        <DemoItem label="Static variant">
                        <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                        </DemoItem>
                    </DemoContainer>
                    </LocalizationProvider>

                </div>
                <div className="assign-bottom">
                    <div className="assign-bottom-top">
                        <p>Today</p>
                        <PiDotsThreeOutlineLight />
                    </div>
                    <div className="assign-data">
                        <div className="assign-data-left">
                            <HiOutlineClock/>
                            <p>Kitchen</p>
                        </div>
                        <div className="assign-data-right">
                            <p className="kitchen-color">4</p>
                        </div>
                    </div>
                    <div className="assign-data">
                        <div className="assign-data-left">
                            <FaRegCircleCheck />
                            <p>Front Desk</p>
                        </div>
                        <div className="assign-data-right">
                            <p className="desk-color">25</p>
                        </div>
                    </div>
                    <div className="assign-data">
                        <div className="assign-data-left">
                            <TbHourglassEmpty />
                            <p>Server</p>
                        </div>
                        <div className="assign-data-right">
                            <p className="server-color">12</p>
                        </div>
                    </div>
                    <div className="assign-data">
                        <div className="assign-data-left">
                            <TbCalendarTime/>
                            <p>Customers</p>
                        </div>
                        <div className="assign-data-right">
                            <p className="customer-color">5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="assign-sit-right">
                <Scheduler
                    events={events}
                    selected={selected}
                    setSelected={setSelected}
                    onRequestAdd={(evt) => addEvent(evt)}
                    onRequestEdit={(evt) => alert("Edit element requested")}
                />
            </div>
        </div>
    );
}
 
export default AssignSit;