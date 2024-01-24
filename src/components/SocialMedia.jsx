import "../styles/SocialMedia/SocialMedia.css"
import tiktok from "../assets/tiktok.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import { ReactSVG } from "react-svg"

const SocialMedia = () => {
    return (
        <>
            <ul id="socialmedia">
                <a href="https://www.tiktok.com/@imdb" target="noblank"><li><ReactSVG src={tiktok} className="socialmedia"/></li></a>
                <a href="https://www.instagram.com/imdb" target="noblank"><li><ReactSVG src={instagram} className="socialmedia"/></li></a>
                <a href="https://twitter.com/imdb" target="noblank"><li><ReactSVG src={twitter} className="socialmedia"/></li></a>
                <a href="https://www.youtube.com/imdb" target="noblank"><li><ReactSVG src={youtube} className="socialmedia"/></li></a>
                <a href="https://www.facebook.com/imdb" target="noblank"><li><ReactSVG src={facebook} className="socialmedia"/></li></a>
            </ul>
        </>
    )
}

export default SocialMedia