import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import './Weight.css';

export default function Weight() {
    const data = [{name: 'Page A', uv: 400, pv: 2400},{name: 'Page B', uv: 800, pv: 1200}];

    return (
        <section className="weightParent">
            <h2>Activité quotidienne</h2>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" name="Poids (kg)" fill="#282D30" barSize={7}/>
                <Bar dataKey="uv" name="Calories brulées (kCal)" fill="#E60000" barSize={7}/>
            </BarChart>
        </section>
    )
}