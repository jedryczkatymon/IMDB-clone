import Logo from './Logo'
import '../styles/Navbar/Navbar.css'
import Menu from './Menu'
import SearchBar from './SearchBar'
import IMDbPro from './IMDbPro'
import Watchlist from './Watchlist'
import SignIn from './SignIn'

const Navbar = () => {
    return (
        <>
            <Logo />
            <Menu />
            <SearchBar />
            <IMDbPro />
            <Watchlist />
            <SignIn />
        </>
    )
}

export default Navbar