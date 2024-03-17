import './Radar.css';
import {Chart as ChartJs} from 'chart.js/auto'
import {Radar} from "react-chartjs-2";

export default function RadarComponent({performanceKind, performanceData}) {

    const kindLabels = Object.values(performanceKind);


    return (
        <section className="radarParent">
            <Radar
                data={{
                    labels: kindLabels,
                    datasets: [
                        {
                            data: performanceData.map((item) => item.value),
                            backgroundColor: 'rgba(255, 1, 1, 0.7)',
                            borderColor: 'rgba(255, 1, 1, 0.7)',
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            top: 20,
                            bottom: 20,
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    scales: {
                        r: {
                            grid: {
                                color: 'white',
                            },
                            pointLabels: {
                                color: 'white',
                                font: {
                                    size: 12
                                }
                            },
                            ticks: {
                                display: false,
                                stepSize: 20
                            },
                            angleLines: {
                                display: false,
                            }
                        }
                    },
                    elements: {
                        point: {
                            radius: 0,
                        },
                        line: {
                            borderWidth: 0,
                        }
                    }
                }}
            />
        </section>
    );
}
