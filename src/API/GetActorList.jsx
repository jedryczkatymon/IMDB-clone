import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/GetActorList/GetActorList.css"
import "../styles/Carousel/slick.css";
import "../styles/Carousel/slick-theme.css";
import { ReactSVG } from "react-svg";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg"

const GetActorList = ({ url, categoryTitle, categorySubtitle }) => {

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
        initialSlide: 0,
        infinite: true,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3.5,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 2.7,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 2.4,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    const [actorList, setActorList] = useState([])

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
            .then(json => setActorList(json.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="category">
            <div className="category-heading">
                <h3>{categoryTitle}</h3>
                <ReactSVG src={next} className="next" />
            </div>
            <h4 className="category-subheading">{categorySubtitle}</h4>
            <Slider {...settings} className="slider">
                {actorList?.map((actor, i) => {
                    if (actor.profile_path != null) {
                        return (
                            <div className="actor" key={i}>
                                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} className="actorpic"/>
                                <p className="actorname">{actor.name}</p>
                            </div>
                        )
                    }
                })}
            </Slider>
        </div>
    );
}

export default GetActorList;