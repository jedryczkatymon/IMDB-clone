import GetMovieList from "../API/GetMovieList"

const Popular = () => {
    return (
        <GetMovieList
            url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
            categoryTitle="The most popular"
            categorySubtitle="This week's most popular movies"
        />
    );
}
export default Popular