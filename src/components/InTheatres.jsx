import GetMovieList from "../API/GetMovieList";

const InTheatres = () => {
    return (
        <GetMovieList
            url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
            categoryTitle="In theatres"
            categorySubtitle="Showtimes near you"
        />
    );
}
export default InTheatres;