import './Header.css'
export default function Header({firstName, lastName}) {

    return (
        <>
        <h1 className="nameHeader">
            Bonjour, <span className="spanName">{firstName} {lastName}</span>
        </h1>
            <p className="paragraphHeader">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    )
}