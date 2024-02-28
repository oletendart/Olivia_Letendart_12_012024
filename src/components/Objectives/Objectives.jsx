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
                />
            </div>
        </section>
)
}