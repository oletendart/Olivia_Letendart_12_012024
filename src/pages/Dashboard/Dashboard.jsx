import Header from "../../components/Header/Header.jsx";
import './Dashboard.css'
import Weight from "../../components/Weight/Weight.jsx";
import Supply from "../../components/Supply/Supply.jsx";
import Objectives from "../../components/Objectives/Objectives.jsx";
import Radar from "../../components/Radar/Radar.jsx";
import Kpi from "../../components/Kpi/Kpi.jsx";

export default function Dashboard() {

    return (
        <section className="dashboardParent">
            <Header/>

            <div className="objectifAndProteins">
                <div className="parentObjectif">
                    <Weight/>

                    <div className="objectifs">
                        <Objectives/>
                        <Radar />
                        <Kpi />
                    </div>
                </div>

                <div className="proteins">
                    {/*    Calories / Glucide / Proteines / Lipide (un seul composant) */}
                    <Supply/>
                    <Supply/>
                    <Supply/>
                    <Supply/>
                </div>

            </div>
        </section>
    )
}