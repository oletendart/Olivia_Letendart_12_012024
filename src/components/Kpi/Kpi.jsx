import {Cell, Pie, PieChart, Text} from "recharts";

export default function Kpi() {
    const data = [
        { name: 'Group A', value: 50 },
    ];
    const COLORS = ['#0088FE'];

    return (
        <section className="kpiParent">
            <Text>Score</Text>
            <PieChart width={258} height={263} >
                <Pie
                    data={data}
                    cx={125}
                    cy={125}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Text
                        x={130}
                        y={130}
                        width={260}
                        height={260}
                        lineHeight="260px"
                        className="kpiText"
                    >
                        Score
                    </Text>
                </Pie>
            </PieChart>
        </section>
    );
}
