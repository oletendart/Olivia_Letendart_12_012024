import { Radar as RechartsRadar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import './Radar.css';

export default function Radar() {
    const data = [
        { category: 'Intensité', value: 21 },
        { category: 'Vitesse', value: 22 },
        { category: 'Force', value: -32 },
        { category: 'Endurance', value: -14 },
        { category: 'Energie', value: -51 },
        { category: 'Cardio', value: 16 }
    ];

    return (
        <section className="radarParent">
            <RadarChart cx={135} cy={135} outerRadius={100} width={258} height={263} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis display="none" />
                <RechartsRadar name="Example" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
            </RadarChart>
        </section>
    );
}
