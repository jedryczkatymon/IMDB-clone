import "../styles/YellowButton/YellowButton.css"

const YellowButton = ({text, classname}) => {
    return (
        <>
            <button className={classname}>
                <p>{text}</p>
            </button>
        </>
    )
}

export default YellowButton