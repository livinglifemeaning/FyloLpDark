import { useState } from "react";
import ProductiveImage from "./illustration-stay-productive.png"; 
import Arrow from "./Arrow"; 
import classes from "./StayProductive.module.css"; 

const StayProductive = () => {
  let baseColor = "#65e2d9";
  let hoverColor = "#FFF"

  const [color, setColor] = useState(baseColor)
    const hoverColorHandler = () => {setColor(hoverColor)}
    const resetColorHandler = () => {setColor(baseColor)}

  return (
    <div className={classes.box}>
      <img src={ProductiveImage} alt="Three illustrated people holding up chat bubbles" />
      <div>
      <p className={classes.title}>Stay productive, wherever you are</p>
      <p className={classes.paragraph}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
      <p className={classes.paragraph}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
      <p className={classes.link} onMouseOver={hoverColorHandler} onMouseLeave={resetColorHandler}>See how Fylo works <span><Arrow color={color}/></span></p>
      </div>
    </div>
  )
}

export default StayProductive
