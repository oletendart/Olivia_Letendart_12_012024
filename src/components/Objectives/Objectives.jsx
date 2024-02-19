import {Line, LineChart, Tooltip, XAxis, Text} from "recharts";
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

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                        <div style={{background: '#fff', padding: '10px', borderRadius: '5px', color: '#000'}}>
                            <p>texte ici</p>
                        </div>
            );
        }

        return null;
    };

    return (
        <section className="objectivesParent">
            <Text style={{color: "#fff", opacity: '0,5'}}>
            Durée moyenne des
            sessions
            </Text>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <LineChart width={263}
                           height={233}
                           data={data}>
                    <XAxis dataKey="day"
                           stroke="#fff"
                           tickLine={false}
                           axisLine={false}
                           style={{ margin: '0 20px'}}/>
                    <Tooltip content={CustomTooltip}/>
                    <Line type="monotone"
                          dataKey="pv"
                          stroke="#ffffff"
                          dot={false}
                    activeDot={{
                        stroke: 'rgba(255,255,255, 0.6)',
                        strokeWidth: 10,
                        r: 5
                    }}/>
                </LineChart>
            </div>
        </section>
    )
}