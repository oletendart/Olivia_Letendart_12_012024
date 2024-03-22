import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import './Dashboard.css'
import Weight from "../../components/Weight/Weight.jsx";
import Supply from "../../components/Supply/Supply.jsx";
import Objectives from "../../components/Objectives/Objectives.jsx";
import Kpi from "../../components/Kpi/Kpi.jsx";
import calories from "../../assets/calories-icon.png";
import protein from "../../assets/protein-icon.png";
import carbs from "../../assets/carbs-icon.png";
import fat from "../../assets/fat-icon.png";
import RadarComponent from "../../components/Radar/Radar.jsx";
import DataMockService from "../../service/dataMockService.js";

export default function Dashboard() {
    const [usersData, setUsersData] = useState(null);
    const [usersActivity, setUsersActivity] = useState(null);
    const [usersAverageSessions, setUsersAverageSessions] = useState(null);
    const [usersPerformance, setUsersPerformance] = useState(null);

    useEffect(() => {
        DataMockService.getData('usersData.json').then(data => setUsersData(data));
        console.log(usersData);
        DataMockService.getData('usersActivity.json').then(data => setUsersActivity(data));
        DataMockService.getData('usersAverageSessions.json').then(data => setUsersAverageSessions(data));
        DataMockService.getData('usersPerformance.json').then(data => setUsersPerformance(data));
    }, []);

    if (!usersData || !usersActivity || !usersAverageSessions || !usersPerformance) {
        return <div>Loading...</div>;
    }

    return (
        <section className="dashboardParent">
            <Header firstName={usersData[0].firstName} lastName={usersData[0].lastName} />

            <div className="objectifAndProteins">
                <div className="parentObjectif">
                    <Weight activity={usersActivity[0].sessions} />

                    <div className="objectifs">
                        <Objectives sessionData={usersAverageSessions[0].sessions} />
                        <RadarComponent performanceKind={usersPerformance[0].kind} performanceData={usersPerformance[0].data} />
                        <Kpi kpiData={usersData[0].score} />
                    </div>
                </div>

                <div className="proteins">
                    <Supply name="Calories" number={usersData[0].keyData.calorieCount} img={calories} />
                    <Supply name="Proteines" number={usersData[0].keyData.proteinCount} img={protein} />
                    <Supply name="Glucides" number={usersData[0].keyData.carbohydrateCount} img={carbs} />
                    <Supply name="Lipides" number={usersData[0].keyData.lipidCount} img={fat} />
                </div>

            </div>
        </section>
    )
}
