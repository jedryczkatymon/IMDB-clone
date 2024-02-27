import YellowButton from "./YellowButton"
import SocialMedia from "./SocialMedia"
import FooterLinks from "./FooterLinks" 
import AmazonLogo from "./AmazonLogo"
import CompanyInfo from "./CompanyInfo"

const Footer = () => {
    return (
        <>
            <YellowButton classname="yellowbuttonbigger" text="Sign in for more access"/>
            <SocialMedia />
            <FooterLinks />
            <AmazonLogo />
            <CompanyInfo />
        </>
    )
}

export default Footer