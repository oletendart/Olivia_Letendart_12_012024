import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className="navigationList">
                    <li>
                        <img src={logo}
                             alt="logo from site"/>
                    </li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </>
    )
}