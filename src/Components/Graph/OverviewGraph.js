import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Graph.css'
const OverviewGraph = ({graph}) => {
    
    const [chartKey, setChartKey] = useState(0);
    const [state, setState] = useState({
        // line:{
            options: {
                chart: {
                    height: 280,
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    }
                },

                yaxis: {
                    tickAmount: 5,
                    min: 0,
                    max: 100000,
                    labels: {
                        show: false,
                        style:{
                            fontSize: "12px",
                            fontFamily: "Inter",
                            fontWeight:'400',
                            colors: "#667085",
                        }
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                    labels: {
                        style:{
                            fontSize: "12px",
                            fontFamily: "Inter",
                            fontWeight:'400',
                            colors: "#667085",
                        }
                    }
                },
                stroke: {
                    curve: 'smooth', // Set the curve option to 'smooth'
                    colors: [ '#4F46E5','#818CF8'] 
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical', // CHANGED to 'vertical' for smooth area transition
                        gradientToColors: ['#FFFFFF0A', '#EEF2FF80', '#818CF8'],
                        stops: [0, 100]
                    },
                    opacity: [0.2, 0.5], 
                },
                dataLabels: {
                    enabled: false,
                    enabledOnSeries: [1]
                },
                legend: {
                    show: false,
                    labels: {
                        colors: "#667085", // Set the color for the series names
                        fontFamily: "Inter",
                        fontSize: "0.77713rem", // Adjust the font size
                    },
                },
            },
        series: [
            {
                name: "Purchase",
                data: [10000, 20000, 30000, 50000, 20000, 15000, 60000, 40000, 10000,50000],
                fill: {
                    type: 'gradient',
                    gradient: {
                        // First area gradient
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFFFFF0A', // CHANGED HERE
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: '#FFFFFF0A', // CHANGED HERE
                                opacity: 0.5
                            }
                        ]
                    }
                }
            },
            {
                name: "Sales",
                data: [15000, 5000, 40000, 60000, 10000, 50000, 50000, 70000, 45000, 30000],
                fill: {
                    type: 'gradient',
                    gradient: {
                        // Second area gradient
                        colorStops: [
                            {
                                offset: 0,
                                color: '#EEF2FF80', // CHANGED HERE
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: '#EEF2FF80', // CHANGED HERE
                                opacity: 0.5
                            }
                        ]
                    }
                }
            }
        ],
    })
    useEffect(() => {
        // When the graph prop changes, update the chart key to trigger a re-render
        setChartKey(prevKey => prevKey + 1);
    }, [graph]);

    // state.series.forEach((series, index) => {
    //     series.colors = `linear-gradient(180deg, ${
    //         index === 0 ? "#817AF3 0%, #74B0FA 47.92%, #79D0F1 100%" : "#46A46C 0%, #51CC5D 47.92%, #57DA65 100%"
    //     })`;
    //
    return ( 
        <div className="overviewgraph">
          
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="100%"
              height='100%'
              key={chartKey} // Use key to force chart re-render
            />
        </div>
    );
}
 
export default OverviewGraph;