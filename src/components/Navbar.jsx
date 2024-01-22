import Logo from './Logo'
import '../styles/Navbar/Navbar.css'
import Menu from './Menu'
import SearchBar from './SearchBar'
import IMDbPro from './IMDbPro'
import Watchlist from './Watchlist'
import SignIn from './SignIn'
import Languages from './Languages'

const Navbar = () => {
    return (
        <>
            <Logo />
            <Menu />
            <SearchBar />
            <IMDbPro />
            <Watchlist />
            <SignIn />
            <Languages />
        </>
    )
}

export default Navbar