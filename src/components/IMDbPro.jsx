import IMDbProLogo from "../assets/IMDbPro.png"
import IMDbProImg from "../assets/IMDbProImg.png"
import line from "../assets/line.png"
import "../styles/IMDbPro/IMDbPro.css"

const IMDbPro = () => {
    return (
        <>
            <button className='IMDbProMenu'>
                <img id="IMDbProLogo" src={IMDbProLogo}></img>
            </button>
            <img className="line" src={line}/>
        </>
    );
}

export default IMDbPro;