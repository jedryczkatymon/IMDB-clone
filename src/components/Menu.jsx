import Logo from './Logo'
import Hamburger from '../assets/hamburger.png'
import '../styles/Menu/Menu.css'

const Menu = () => {

    function openNav() {
        document.getElementById("nav").style.height = "100%";
        document.getElementsByClassName("overlay-content").style.opacity = "1";
        document.getElementsByClassName("overlay-nav").style.opacity = "1";
    }

    function closeNav() {
        document.getElementById("nav").style.height = "0%";
        document.getElementsByClassName("overlay-content").style.opacity = "0";
        document.getElementsByClassName("overlay-nav").style.opacity = "0";
    }

    return (
        <>
            <div id="nav" className="overlay">
                <div className="overlay-nav">
                    <Logo />
                    <button className="closebtn" onClick={closeNav}>
                        &times;
                    </button>
                </div>
                <div className="overlay-content">
                    <div className="container">
                        <div className="parent">
                            <div className="div1">
                                <h2>Movies</h2>
                                <ul>
                                    <li>Release Calendar</li>
                                    <li>Top 250 Movies</li>
                                    <li>Most Popular Movies</li>
                                    <li>Browse Movies by Genre</li>
                                    <li>Top Box Office</li>
                                    <li>Showtimes & Tickets</li>
                                    <li>Movie News</li>
                                    <li>India Movie Spotlight</li>
                                </ul>
                            </div>
                            <div className="div2">
                                <h2>Celebs</h2>
                                <ul>
                                    <li>Born Today</li>
                                    <li>Most Popular Celebs</li>
                                    <li>Celebrity News</li>
                                </ul>
                            </div>
                            <div className="div3">
                                <h2>TV Shows</h2>
                                <ul>
                                    <li>What's on TV & Streaming</li>
                                    <li>Top 250 TV Shows</li>
                                    <li>Most Popular TV Shows</li>
                                    <li>Brows TV Shows by Genre</li>
                                    <li>TV News</li>
                                </ul>
                            </div>
                            <div className="div4">
                                <h2>Watch</h2>
                                <ul>
                                    <li>What to Watch</li>
                                    <li>Latest Trailers</li>
                                    <li>IMDb Originals</li>
                                    <li>IMDb Picks</li>
                                    <li>IMDb Podcasts</li>
                                </ul>
                            </div>
                            <div className="div5">
                                <h2>Awards & Events</h2>
                                <ul>
                                    <li>Oscars</li>
                                    <li>Emmys</li>
                                    <li>Best of 2023</li>
                                    <li>Holiday Picks</li>
                                    <li>STARmeter Awards</li>
                                    <li>Awards Central</li>
                                    <li>Festival Central</li>
                                    <li>All Events</li>
                                </ul>
                            </div>
                            <div className="div6">
                                <h2>Community</h2>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Contributor Zone</li>
                                    <li>Polls</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='menu' onClick={openNav} >
                <img src={Hamburger}></img>
                <p>Menu</p>
            </button>
        </>
    )
}

export default Menu