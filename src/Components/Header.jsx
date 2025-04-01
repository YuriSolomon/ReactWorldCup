import logo from '../assets/images/world_cup.png';

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="picture of the world cup trophie" />
            <h1>Live World Cup match results</h1>
        </header>
    )
}