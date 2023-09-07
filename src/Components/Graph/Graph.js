import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Graph.css'
const Graph = ({graph}) => {
    
    const [chartKey, setChartKey] = useState(0);
    const [state, setState] = useState({
        // line:{
            options: {
                chart: {
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
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#817AF3', '#74B0FA', '#79D0F1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                      },
                },
                dataLabels: {
                    enabled: false,
                    enabledOnSeries: [1]
                },
                plotOptions: {
                    bar: {
                        // horizontal: false,
                        borderRadius: 6,
                        borderRadiusApplication: 'end',
                        columnWidth: '45%',
                        endingShape: 'rounded',
                    },
                },
                legend: {
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
                // Specify the chart type for this series
                barWidth: '40%', // Adjust the width of series-2 bars
                // color: {
                //     linearGradient: {
                //       stops: [
                //         { offset: 0, color: '#FF0080' },
                //         { offset: 100, color: '#FF8E53' },
                //       ],
                //     },
                //   },
            },
            {
                name: "Sales",
                data: [15000, 5000, 40000, 60000, 10000, 50000, 50000, 70000, 45000, 30000],
                 // Specify the chart type for this series
                barWidth: '40%', // Adjust the width of series-2 bars
                // color: {
                //     linearGradient: {
                //       stops: [
                //         { offset: 0, color: '#00AEEF' },
                //         { offset: 100, color: '#48E9C6' },
                //       ],
                //     },
                // },
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
        <div className="graph">
          
            <Chart
              options={state.options}
              series={state.series}
              type={graph}
              width="100%"
              height='100%'
              key={chartKey} // Use key to force chart re-render
            />
        </div>
    );
}
 
export default Graph;