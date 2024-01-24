import "../styles/AmazonLogo/AmazonLogo.css"
import amazonlogo from "../assets/amazonlogo.svg"
import { ReactSVG } from "react-svg"

const AmazonLogo = () => {
    return (
        <>
            <ReactSVG src={amazonlogo} className="amazonlogo"/>
        </>
    )
}

export default AmazonLogo