import './Supply.css';


export default function Supply(props) {

    return (
        <section className="supplyParent">
                <img src={props.img}
                     alt="image props"/>
                <div>
                    <h2>{props.number}</h2>
                    <h3>{props.name}</h3>
                </div>
        </section>
    )
}