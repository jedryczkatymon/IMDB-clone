import "../styles/MovieCard/MovieCard.css"
import { ReactSVG } from "react-svg";
import emptystar from "../assets/empty-star.svg"
import plus from "../assets/plus.svg"
import play from "../assets/play.svg"
import moreinfo from "../assets/more-info.svg"
import addtowatchlist from "../assets/addtowatchlist.svg"
import addtowatchlistplus from "../assets/addtowatchlistplus.svg"

const MovieCard = ({poster, rating, title, name}) => {
    return (
        <div className="moviecard">
            <ReactSVG src={addtowatchlist} className="addtowatchlisticon"/>
            <ReactSVG src={addtowatchlistplus} className="addtowatchlistplus"/>
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" className="poster" />
            <div className="ratings">
                <p className="rating">{rating}</p>
                <button className="addrating"><ReactSVG src={emptystar} className="emptystar"/></button>
            </div>
            <h4 className="title">{title}{name}</h4>
            <button className="addtowatchlist">
                <ReactSVG src={plus} className="plus"/>
                Watchlist
            </button>
            <div className="trailer-moreinfo">
                <button className="trailer">
                    <ReactSVG src={play} className="play"/>
                    Trailer
                </button>
                <button className="moreinfo">
                    <ReactSVG src={moreinfo} className="moreinfoicon"/>
                </button>
            </div>
        </div>
    );
}

export default MovieCard;