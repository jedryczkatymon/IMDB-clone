import GetMovieList from "../API/GetMovieList";

const TopRated = () => {
    return (
        <GetMovieList
            url="https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
            categoryTitle="Top rated"
            categorySubtitle="Top rated TV series just for you"
        />
    );
}
export default TopRated;