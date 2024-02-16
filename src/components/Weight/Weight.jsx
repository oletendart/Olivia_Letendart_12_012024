import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import './Weight.css';

export default function Weight() {
    const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ background: '#E60000', padding: '10px', borderRadius: '5px', color: '#fff' }}>
                    {data.map((dataName, index) => (
                        <div key={index}>
                            <p>{dataName.pv}</p>
                            <p>{dataName.amt}</p>
                        </div>
                        ))}
                </div>
            );
        }

        return null;
    };

    return (
        <section className="weightParent">
            <h2>Activité quotidienne</h2>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="6" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis orientation="right" axisLine={false} tickLine={false} />
                <Tooltip content={CustomTooltip}/>
                <Legend iconType="circle" verticalAlign="top" align="right" contentStyle={{ marginBottom: '20px' }}/>
                <Bar
                    dataKey="pv"
                     name="Poids (kg)"
                     fill="#282D30"
                     barSize={7}
                     bar={{ borderRadius: '24px' }}/>
                <Bar
                    dataKey="uv"
                    name="Calories brulées (kCal)"
                    fill="#E60000"
                    barSize={7}
                    bar={{ borderRadius: '24px' }}/>
            </BarChart>
        </section>
    )
}