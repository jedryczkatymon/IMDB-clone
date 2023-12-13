import IMDb from '../assets/IMDb.png'
import Menu from './Menu'
import '../styles/Navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
            <a href="/index.html">
                <img src={IMDb}></img>
                <Menu />
            </a>
        </>
    )
}

export default Navbar