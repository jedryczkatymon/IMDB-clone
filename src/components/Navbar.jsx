import Logo from './Logo'
import '../styles/Navbar/Navbar.css'
import Menu from './Menu'
import SearchBar from './SearchBar'
import IMDbPro from './IMDbPro'
import Watchlist from './Watchlist'

const Navbar = () => {
    return (
        <>
            <Logo />
            <Menu />
            <SearchBar />
            <IMDbPro />
            <Watchlist />
        </>
    )
}

export default Navbar