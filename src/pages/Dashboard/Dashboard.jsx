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

export default function Dashboard() {
    const data = [
        {
            name: "Calories",
            number: '1930Kcal',
            img: calories
        },
        {
            name: "Proteines",
            number: '155g',
            img: protein
        },
        {
            name: "Glucides",
            number: '250g',
            img: carbs
        },
        {
            name: "Lipides",
            number: '50g',
            img: fat
        },
    ]

    return (
        <section className="dashboardParent">
            <Header/>

            <div className="objectifAndProteins">
                <div className="parentObjectif">
                    <Weight/>

                    <div className="objectifs">
                        <Objectives/>
                        <RadarComponent />
                        <Kpi />
                    </div>
                </div>

                <div className="proteins">
                    {data.map((data, index) => (
                        <Supply key={index} name={data.name} number={data.number} img={data.img}/>
                        ))}
                </div>

            </div>
        </section>
    )
}