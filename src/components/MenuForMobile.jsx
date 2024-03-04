import "../styles/MenuForMobile/MenuForMobile.css"
import Hamburger from '../assets/hamburger.png'

function openNav() {
    document.getElementById("nav").style.width = "30%";
    document.getElementsByClassName("overlay-content-formobile").style.opacity = "1";
    document.getElementsByClassName("overlay-nav-formobile").style.opacity = "1";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementsByClassName("overlay-content-formobile").style.opacity = "0";
    document.getElementsByClassName("overlay-nav-formobile").style.opacity = "0";
}

const MenuForMobile = () => {
    return (
        <div id="menuformobile">
            <div id="nav" className="overlayformobile">
                <div className="overlay-nav-formobile">
                    <button className="closebtnformobile" onClick={closeNav}>
                        &times;
                    </button>
                </div>
                <div className="overlay-content-formobile">
                    <div className="containerformobile">
                        <div className="parentformobile">
                            <div className="div1formobile">
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
                            <div className="div2formobile">
                                <h2>Celebs</h2>
                                <ul>
                                    <li>Born Today</li>
                                    <li>Most Popular Celebs</li>
                                    <li>Celebrity News</li>
                                </ul>
                            </div>
                            <div className="div3formobile">
                                <h2>TV Shows</h2>
                                <ul>
                                    <li>What's on TV & Streaming</li>
                                    <li>Top 250 TV Shows</li>
                                    <li>Most Popular TV Shows</li>
                                    <li>Brows TV Shows by Genre</li>
                                    <li>TV News</li>
                                </ul>
                            </div>
                            <div className="div4formobile">
                                <h2>Watch</h2>
                                <ul>
                                    <li>What to Watch</li>
                                    <li>Latest Trailers</li>
                                    <li>IMDb Originals</li>
                                    <li>IMDb Picks</li>
                                    <li>IMDb Podcasts</li>
                                </ul>
                            </div>
                            <div className="div5formobile">
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
                            <div className="div6formobile">
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

            <button className='menuformobile' onClick={openNav} >
                <img id="icon" src={Hamburger}></img>
            </button>
        </div>
    );
}

export default MenuForMobile;