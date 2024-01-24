import './Supply.css';
import calories from '../../assets/calories-icon.png';
import carbs from '../../assets/carbs-icon.png'
import fat from '../../assets/fat-icon.png'
import protein from '../../assets/protein-icon.png'


export default function Supply() {
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
        <section className="supplyParent">
            {data.map((data, index) => (
                <div key={index}>
                <img src={data.img}
                     alt=""/>
                <div>
                    <h2>{data.number}</h2>
                    <h3>{data.name}</h3>
                </div>
                </div>
            ))}
        </section>
    )
}