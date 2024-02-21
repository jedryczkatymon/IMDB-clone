import { ReactSVG } from "react-svg";
import moreinfo from "../assets/more-info.svg"

const MoreInfo = () => {
    return (
        <button className="moreinfo">
            <ReactSVG src={moreinfo} className="moreinfoicon" />
        </button>
    );
}

export default MoreInfo;