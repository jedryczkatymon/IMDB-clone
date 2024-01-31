import { ReactSVG } from "react-svg";
import next from "../assets/next.svg";
import addtowatchlist from "../assets/addtowatchlist.svg"
import addtowatchlistplus from "../assets/addtowatchlistplus.svg"
import "../styles/FromYourWatchlist/FromYourWatchlist.css"

const FromYourWatchlist = () => {
    return (
        <>
            <div className="category">
                <div className="category-heading">
                    <h3>From your watchlist</h3>
                    <ReactSVG src={next} className="next" />
                </div>
                <div className="fromyourwatchlist">
                    <ReactSVG src={addtowatchlist} className="addtowatchlisticon" />
                    <ReactSVG src={addtowatchlistplus} className="addtowatchlistplus" />
                    <h5>Sign in to access your Watchlist</h5>
                    <p>Save shows and movies to keep track of what you want to watch.</p>
                    <button className="addtowatchlist">
                        Watchlist
                    </button>
                </div>
            </div>
        </>
    );
}

export default FromYourWatchlist;