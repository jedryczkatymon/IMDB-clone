import Hamburger from '../assets/hamburger.png'
import '../styles/MenuForMobile/MenuForMobile.css'

const MenuForMobile = () => {

    function openNavMobile() {
        document.getElementById("nav-mobile").style.display = "block";
        document.getElementById("nav-mobile").style.width = "33%";
    }

    function closeNavMobile() {
        document.getElementById("nav-mobile").style.display = "none";

    }

    return (
        <>
            <div id="nav-mobile" className="overlay-mobile">
                <div className="overlay-nav-mobile">
                    <button className="closebtn-mobile" onClick={closeNavMobile}>
                        &times;
                    </button>
                </div>
                <div className="overlay-content-mobile">
                    <div className="container-mobile">
                        <div className="parent-mobile">
                            <details className="div1-mobile">
                                <summary>
                                    <h3>Movies</h3>
                                </summary>
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
                            </details>
                            <details className="div2-mobile">
                                <summary>
                                    <h3>Celebs</h3>
                                </summary>
                                <ul>
                                    <li>Born Today</li>
                                    <li>Most Popular Celebs</li>
                                    <li>Celebrity News</li>
                                </ul>
                            </details>
                            <details className="div3-mobile">
                                <summary>
                                    <h3>TV Shows</h3>
                                </summary>
                                <ul>
                                    <li>What's on TV & Streaming</li>
                                    <li>Top 250 TV Shows</li>
                                    <li>Most Popular TV Shows</li>
                                    <li>Brows TV Shows by Genre</li>
                                    <li>TV News</li>
                                </ul>
                            </details>
                            <details className="div4-mobile">
                                <summary>
                                    <h3>Watch</h3>
                                </summary>
                                <ul>
                                    <li>What to Watch</li>
                                    <li>Latest Trailers</li>
                                    <li>IMDb Originals</li>
                                    <li>IMDb Picks</li>
                                    <li>IMDb Podcasts</li>
                                </ul>
                            </details>
                            <details className="div5-mobile">
                                <summary>
                                    <h3>Awards & Events</h3>
                                </summary>
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
                            </details>
                            <details className="div6-mobile">
                                <summary>
                                    <h3>Community</h3>
                                </summary>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Contributor Zone</li>
                                    <li>Polls</li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            <button className='menubuttonmobile' onClick={openNavMobile} >
                <img id="icon-mobile" src={Hamburger}></img>
            </button>
        </>
    )
}

export default MenuForMobile;
