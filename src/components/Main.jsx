import Section from "./Section"
import TopRated from "./TopRated";
import Popular from "./Popular";
import FromYourWatchlist from "./FromYourWatchlist";
import InTheatres from "./InTheatres";
import PopularActors from "./PopularActors";

const Main = () => {
    return (
        <>
            <Section sectionName="What to watch" component={[<TopRated/>, <FromYourWatchlist/>, <Popular/>]}/>
            <Section sectionName="Explore Movies & TV shows" component={[<InTheatres/>]}/>
            <Section sectionName="More to explore" component={<PopularActors/>}/>
        </>
    )
}

export default Main;