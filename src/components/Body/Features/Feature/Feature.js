import AccessAnywhere from "./icon-access-anywhere.svg"; 
import Security from "./icon-security.svg"; 
import Collaboration from "./icon-collaboration.svg"; 
import AnyFile from "./icon-any-file.svg"; 
import classes from "./Feature.module.css"; 
const IMAGES = [AccessAnywhere, Security, Collaboration, AnyFile]; 

const Feature = ({title, paragraph, index, alt}) => {
  return (
    <div className={classes.feature}>
      <img src={IMAGES[index]} alt={alt} className={classes.image}/>
      <p className={classes.title}>{title}</p>
      <p className={classes.paragraph}>{paragraph}</p>
    </div>
  )
}

export default Feature
