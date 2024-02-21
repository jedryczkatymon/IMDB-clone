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
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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
    console.log(actorList)

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
                            <div className="actor">
                                <img key={i} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} className="actorpic"/>
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