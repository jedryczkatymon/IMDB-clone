import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Slider from "react-slick";
import "../styles/TopRated/TopRated.css"
import "../styles/Carousel/slick.css";
import "../styles/Carousel/slick-theme.css";
import { ReactSVG } from "react-svg";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg"

const GetMovieList = ({ url, categoryTitle, categorySubtitle }) => {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <ReactSVG src={next} />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <ReactSVG src={previous} />
            </div>
        );
    }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION}`
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(json => setMovieList(json.results))
            .catch(err => console.error(err));
    }, [])
    console.log(movieList)

    return (
        <div className="category">
            <div className="category-heading">
                <h3>{categoryTitle}</h3>
                <ReactSVG src={next} className="next" />
            </div>
            <h4 className="category-subheading">{categorySubtitle}</h4>
            <Slider {...settings} className="slider">
                {movieList?.map((movie, i) => {
                    return (
                        <MovieCard key={i} poster={movie.poster_path} rating={movie.vote_average.toFixed(1)} title={movie.title} name={movie.name} />
                    )
                })}
            </Slider>
        </div>
    );
}

export default GetMovieList;