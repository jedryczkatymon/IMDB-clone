import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Slider from "react-slick";
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
        draggable: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4.5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4.5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3.5
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 2.7
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 2.4
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
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
                        <MovieCard
                            key={i}
                            poster={movie.poster_path}
                            rating={movie.vote_average.toFixed(1)}
                            title={movie.title}
                            name={movie.name}
                        />
                    )
                })}
            </Slider>
        </div>
    );
}

export default GetMovieList;