import { styled } from '@mui/material/styles';
import { FaRegFilePdf } from "react-icons/fa";
import OverviewGraph from "../../Components/Graph/OverviewGraph";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


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

            </div>
        </div>
    );
}
 
export default Overview;