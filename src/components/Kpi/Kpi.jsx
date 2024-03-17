import {Doughnut} from "react-chartjs-2";

export default function Kpi({kpiData}) {
    const doughnutPluginsScoreCenter = {
        id: 'doughnut_plugins_score_center',
        beforeDatasetsDraw(chart) {
            const score = chart.data.datasets[0].data[0];
            const { ctx, width, height } = chart;

            const textFirstPart = score + '%';
            const textSecondPart = 'de votre';
            const textThirdPart = 'objectif';

            const centerX = width / 2;
            const centerY = height / 2;

            ctx.font = 'bold 26px Roboto';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText(textFirstPart, centerX - 20, centerY);

            ctx.fillStyle = 'gray';
            ctx.font = '16px Roboto';
            ctx.fillText(textSecondPart, centerX - 25, centerY + 30);
            ctx.fillText(textThirdPart, centerX - 25, centerY + 50);
        },
    };

    return (
        <section className="kpiParent" style={{ height: '250px', width: '250px' }}>
            <Doughnut
                data={{
                    datasets: [
                        {
                            data: [
                                100 - kpiData * 100,
                                Math.floor(kpiData * 100),
                            ],
                            backgroundColor: ['red', '#FBFBFB'],
                        },
                    ],
                    labels: ['todayScore', ''],
                }}
            options={{
                animation: false,
                responsive: true,
                maintainAspectRatio: true,
                borderWidth: 0,
                cutout: 90,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 5,
                        bottom: 5,
                    },
                },
                plugins: {
                    title: {
                        text: 'Score',
                        display: true,
                        align: 'start',
                        color: 'black',
                        font: {
                            size: 15,
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    }
                },
                elements: {
                    arc: {
                        borderRadius: 10
                    }
                }
            }}
                      plugins={[doughnutPluginsScoreCenter]}
            />
        </section>
    );
}
