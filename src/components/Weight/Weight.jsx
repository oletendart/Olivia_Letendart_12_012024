import './Weight.css';
import {Bar} from "react-chartjs-2";

export default function Weight({activity}) {


    return (
        <section className="weightParent">
            <Bar
                data={{
                    labels: ['1', '2', '3', '4', '5', '6', '7'].map(data => data),
                    datasets: [
                        {
                            label: "Poids (kg)",
                            data: activity.map((data) => data.kilogram),
                            backgroundColor: 'black',
                            yAxisID: 'yPoids'
                        },
                        {
                            label: 'Calories brûlées (kCal)',
                            data: activity.map((data) => data.calories),
                            backgroundColor: 'red',
                            yAxisID: 'yCalories'
                        }
                    ],
                }}
                options={{
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    datasets: {
                        bar: {
                            borderRadius: 5,
                            barPercentage: 0.5,
                            categoryPercentage: 0.4,
                        }
                    },
                    plugins: {
                        tooltip: {
                            backgroundColor: "red",
                            bodyColor: 'white',
                            mode: "index",
                            usePointStyle: true,
                            displayColors: false,
                            bodySpacing: 25,
                            padding: {
                                y: 10,
                                x: 10,
                            },
                            bodyAlign: "center",
                            bodyFont: {
                                size: 9,
                            },
                            caretSize: 0,
                            caretPadding: 30,
                            cornerRadius: 0,
                            callbacks: {
                                title: () => {
                                    return '';
                                },
                                label: (context) => {
                                    let label = '';

                                    if (context.dataset.label === "Poids (kg)") {
                                        label = context.formattedValue + "kg"
                                    }

                                    if (context.dataset.label === "Calories brûlées (kCal)") {
                                        label = context.formattedValue + "Kcal"
                                    }

                                    return label;
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: "Activité quotidienne",
                            font: {
                                weight: "bold",
                                family: "Roboto",
                                size: 15,
                            },
                            color: 'black',
                            align: 'start',
                            fullSize: false,
                            lineHeight: 12,
                            padding: {
                                bottom: -30,
                            }
                        },
                        legend: {
                            position: 'top',
                            align: 'end',
                            labels: {
                                usePointStyle: true,
                                pointStyle: "circle",
                                pointStyleWidth: 6,
                                boxHeight: 5,
                                padding: 20,
                            }
                        },
                        backgroundColor: "red",
                    },
                    layout: {
                        padding: {
                            left: 20,
                            top: 5,
                            right: 5,
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                            }
                        },
                        yPoids: {
                            id: 'A',
                            position: "right",
                            min:
                                Math.min(
                                    ...activity.map(
                                        (item) => item.kilogram
                                    )
                                ) - 2,
                            max:
                                Math.max(
                                    ...activity.map(
                                        (item) => item.kilogram
                                    )
                                ) + 2,
                            border: {
                                dash: [3, 2],
                                display: false,
                            },
                            ticks: {
                                stepSize: 1,
                            }
                        },
                        yCalories: {
                            id: 'B',
                            position: 'left',
                            beginAtZero: false,
                            display: false,
                            max:
                                Math.max(
                                    ...activity.map(
                                        (item) => item.calories
                                    )
                                ) + 20,
                        },
                },
                    onHover: (event, chartElement) => {
                        if (chartElement.length > 0) {
                            const activePoint = chartElement[0];
                            const ctx = event.chart.ctx;
                            ctx.save();
                            ctx.globalCompositeOperation = 'destination-over';
                            ctx.fillStyle = 'lightgray';
                            const distanceFromGridToX =
                                activePoint.datasetIndex === 0 ? 43 : 65;
                            ctx.fillRect(
                                activePoint.element.x - distanceFromGridToX,
                                42,
                                93,
                                216
                            );
                            ctx.restore();
                        }
                    },
                }}
            />
        </section>
    )
}