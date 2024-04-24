import MenuForMobile from './MenuForMobile'
import Logo from './Logo'
import Menu from './Menu'
import SearchBar from './SearchBar'
import IMDbPro from './IMDbPro'
import Watchlist from './Watchlist'
import SignIn from './SignIn'
import Languages from './Languages'
import YellowButton from './YellowButton'

const Navbar = () => {
    return (
        <>
            <MenuForMobile />
            <Logo />
            <Menu />
            <SearchBar />
            <IMDbPro />
            <Watchlist />
            <SignIn />
            <Languages />
            <YellowButton classname="yellowbuttonsmaller" text="Use app" />
        </>
    )
}

export default Navbar