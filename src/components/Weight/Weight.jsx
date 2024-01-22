import {Line, LineChart} from "recharts";

export default function Weight() {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 800, pv: 1200, amt: 1200}];

    return (
        <section className="weightParent">
            <h2>Activité quotidienne</h2>
            <LineChart width={835} height={320} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </section>
    )
}