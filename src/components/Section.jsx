const Section = ({sectionName, component}) => {
    return (
        <div className="section">
            <h2>{sectionName}</h2>
            <div>{component}</div>
        </div>
    );
}

export default Section;