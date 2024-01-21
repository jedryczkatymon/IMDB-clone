import "../styles/Watchlist/Watchlist.css"
import WatchlistIcon from "../assets/watchlist.svg"

const Watchlist = () => {
    return (
        <>
            <button className='watchlist'>
                <img id="icon" src={WatchlistIcon}></img>
                <p>Watchlist</p>
            </button>
        </>
    );
}

export default Watchlist;