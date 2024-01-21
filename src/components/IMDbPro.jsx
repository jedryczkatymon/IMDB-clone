import IMDbProLogo from "../assets/IMDbPro.png"
import line from "../assets/line.png"
import "../styles/IMDbPro/IMDbPro.css"

const IMDbPro = () => {
    return (
        <>
            <button className='IMDbProMenu'>
                <img id="IMDbProLogo icon" src={IMDbProLogo}></img>
            </button>
            <img className="line" src={line}/>
        </>
    );
}

export default IMDbPro;