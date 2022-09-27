import Map from "./icon-location.svg"; 
import Phone from "./icon-phone.svg"; 
import Email from "./icon-email.svg"; 
import classes from "./Info.module.css"; 

const Info = () => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.info}>
      <img src={Map} alt=""/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>

      <div className={classes.right}>
      <div className={classes.info}>
      <img src={Phone} alt=""/>
      <p>+1-543-123-4567</p>
      </div>

      <div className={classes.info}>
      <img src={Email} alt=""/>
      <p>example@fylo.com</p>
      </div>
      </div>
    </div>
  )
}

export default Info
