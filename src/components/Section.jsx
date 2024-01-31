import TopRated from "./TopRated";
import Popular from "./Popular";
import FromYourWatchlist from "./FromYourWatchlist";


const Section = ({sectionName}) => {
    return (
        <div className="section">
            <h2>{sectionName}</h2>
            <TopRated />
            <FromYourWatchlist />
            <Popular />
        </div>
    );
}

export default Section;