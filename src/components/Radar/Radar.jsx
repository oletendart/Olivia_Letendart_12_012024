import { Radar as RechartsRadar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import './Radar.css';

export default function Radar() {
    const data = [
        { category: 'A', value: 21 },
        { category: 'B', value: 22 },
        { category: 'C', value: -32 },
        { category: 'D', value: -14 },
        { category: 'E', value: -51 },
        { category: 'F', value: 16 },
        { category: 'G', value: 7 },
        { category: 'H', value: -8 },
        { category: 'I', value: 9 },
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
