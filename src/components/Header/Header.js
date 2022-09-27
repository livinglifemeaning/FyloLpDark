import useMediaQuery from "./useMediaQuery"; 
import Heading from "./Heading/Heading";
import Hero from "./Hero/Hero";
import BGDesktop from "./bg-curvy-desktop.svg"; 
import BGMobile from "./bg-curvy-mobile.svg"; 
import classes from "./Header.module.css"; 


const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)"); 

  return (
    <div className={classes.header} >
      <Heading/>
      <Hero/>
      <img src={isDesktop ? BGDesktop : BGMobile} alt="" className={classes.bgImg} />
     {!isDesktop && <div className={classes.bg} />}
    </div>
  )
}

export default Header
