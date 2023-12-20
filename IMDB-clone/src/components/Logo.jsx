import IMDb from '../assets/IMDb.png'
import '../styles/Logo/Logo.css'

const Logo = () => {
    return (
        <>
            <a href="/index.html">
                <img src={IMDb}></img>
            </a>
        </>
    )
}

export default Logo