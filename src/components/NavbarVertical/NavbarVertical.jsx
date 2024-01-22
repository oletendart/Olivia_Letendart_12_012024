import './NavbarVertical.css';
import velo from '../../assets/velo.png';
import natation from '../../assets/natation.png';
import halterophilie from '../../assets/halterophilie.png';
import yoga from '../../assets/yoga.png';

export default function NavbarVertical() {

    return (
        <div className="navbarVertical">
            <ul>
                <li>
                    <img src={yoga}
                         alt="icon yoga"/>
                </li>
                <li>
                    <img src={natation}
                         alt="icon natation"/>
                </li>
                <li>
                    <img src={velo}
                         alt="icon velo"/>
                </li>
                <li>
                    <img src={halterophilie}
                         alt="icon halterophilie"/>
                </li>
            </ul>
            <h1>Copiryght, SportSee 2020</h1>
        </div>
    )
}