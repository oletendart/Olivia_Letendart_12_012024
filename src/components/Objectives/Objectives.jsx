import './Objectives.css';
import {Chart as Chartjs} from 'chart.js/auto'
import {Line} from "react-chartjs-2";

import revenueData from '../../data/revenueData.json'

export default function Objectives() {


    return (
        <section className="objectivesParent">
            <div style={{display: 'flex', justifyContent: 'center', width: '250px', height: '250px'}}>
                <Line data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Poids",
                            data: revenueData.map((data) => data.rev),
                            backgroundColor: "#000000",
                            borderColor: "#fff"
                        }
                    ],
                }}
                      options={{
                          maintainAspectRatio: false,
                          responsive: true,
                          plugins: {
                              title: {
                                  display: true,
                                  text: ["Durée moyenne des", "sessions"],
                                  font: {
                                      weight: 500,
                                      size: 15,
                                      family: 'Roboto',
                                  },
                                  padding: 15,
                                  color: "rgba(255, 255, 255, 0.5)",
                                  align: 'start',
                                  fullSize: false
                              },
                              legend: {
                                  display: false
                              },
                              tooltip: {
                                  mode: 'nearest',
                                  intersect: false,
                                  backgroundColor: "white",
                                  bodyColor: "black",
                                  cornerRadius: 0,
                                  displayColors: false,
                                  padding: 10,
                                  caretSize: 0,
                                  caretPadding: 15,
                                  callbacks: {
                                      title: () => {
                                          return '';
                                      },
                                      label: (context) => {
                                          if (context.formattedValue) {
                                              return context.formattedValue + "min";
                                          }
                                      }
                                  }
                              }
                          },
                          pointStyle: true,
                          pointRadius: 0,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 10,
                          pointHitRadius: 20,
                          pointHoverBackgroundColor: "white",
                          borderColor: "rgba(255, 255, 255, 1)",
                          tension: 0.4,
                          scales: {
                              x: {
                                  grid: {
                                      display: false,
                                  },
                                  ticks: {
                                      color: "rgba(255, 255, 255, 0.5)",
                                      font: {
                                          size: 12,
                                      }
                                  },
                                  border: {
                                      display: false,
                                  }
                              },
                              y: {
                                  grid: {
                                      display: false,
                                  },
                                  min: -30,
                                  max: 150,
                                  display: false,
                              }
                          },
                          borderWidth: 2,
                          layout: {
                              padding: {
                                  bottom: 10,
                                  left: 15,
                                  right: 15,
                              }
                          },
                          onHover: (event, chartElement) => {
                              if (chartElement.length > 0) {
                                  const activePoint = chartElement[0];
                                  const ctx = event.chart.ctx;
                                  ctx.save();
                                  ctx.globalCompositeOperation = "destination-over";
                                  ctx.fillStyle = 'rgba(170, 8, 8, 1)';
                                  ctx.fillRect(
                                      activePoint.element.x,
                                      0,
                                      event.chart.width - activePoint.element.x,
                                      260
                                  );
                                  ctx.restore();
                              }
                          }
                      }}
                />
            </div>
        </section>
)
}