import "../styles/CompanyInfo/CompanyInfo.css"

const today = new Date();
const year = today.getFullYear();

const CompanyInfo = () => {
    return (
        <>
            <p className="companyinfo">&copy; 1990-{year} by IMDb.com, Inc.</p>
        </>
    )
}

export default CompanyInfo