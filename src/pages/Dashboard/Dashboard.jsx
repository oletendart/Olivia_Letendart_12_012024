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
import DataService from "../../service/dataService.js";

export default function Dashboard() {
    const user = DataService.getUserById(18);


    return (
        <section className="dashboardParent">
            <Header firstName={user.data.userInfos.firstName} lastName={user.data.userInfos.lastName}/>

            <div className="objectifAndProteins">
                <div className="parentObjectif">
                    <Weight activity={user.data.activity.sessions}/>

                    <div className="objectifs">
                        <Objectives sessionData={user.data.averageSession.sessions}/>
                        <RadarComponent performanceKind={user.data.performance.kind} performanceData={user.data.performance.data}/>
                        <Kpi />
                    </div>
                </div>

                <div className="proteins">
                    <Supply name="Calories" number={user.data.keyData.calorieCount} img={calories}/>
                    <Supply name="Proteines" number={user.data.keyData.proteinCount} img={protein}/>
                    <Supply name="Glucides" number={user.data.keyData.carbohydrateCount} img={carbs}/>
                    <Supply name="Lipides" number={user.data.keyData.lipidCount} img={fat}/>
                </div>

            </div>
        </section>
    )
}