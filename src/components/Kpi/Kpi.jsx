import {RadialBar, RadialBarChart, Text} from "recharts";

export default function Kpi() {
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
    ];

    return (
        <section className="kpiParent">
            <Text>Score</Text>
            <RadialBarChart width={258} height={263} innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
            </RadialBarChart>
        </section>
    )
}