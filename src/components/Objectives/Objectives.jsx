import './Objectives.css';
import { Chart as ChartJS } from "chart.js/auto";
import {Line} from "react-chartjs-2";

import revenueData from '../../data/revenueData.json'

export default function Objectives() {


    return (
        <section className="objectivesParent">
            <div style={{display: 'flex', justifyContent: 'center'}}>
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
                                      weight: 400,
                                      size: 10,
                                      family: 'Roboto'
                                  },
                                  padding: 15,
                                  color: 'white',
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
                      }}
                />
            </div>
        </section>
)
}