import {Line, LineChart, Tooltip, XAxis} from "recharts";
import './Objectives.css'

export default function Objectives() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
            day: 'L'
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
            day: 'M'
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
            day: 'M'
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
            day: 'J'
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
            day: 'V'
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
            day: 'S'
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
            day: 'D'
        },
    ];

    return (
        <section className="objectivesParent">
            <LineChart width={258} height={263} data={data}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#ffffff" />
            </LineChart>
        </section>
    )
}