import Info from "./Info/Info";
import FooterNav from "./FooterNav/FooterNav";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import Logo from "../../logo.svg"; 
import classes from "./Footer.module.css"; 


const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={Logo} alt="Fylo logo" className={classes.logo}/>
      <div className={classes.flexBox}>
      <Info/>
      <FooterNav/>
      <SocialMediaBar/>
      </div>
    </div> 
  )
}

export default Footer
