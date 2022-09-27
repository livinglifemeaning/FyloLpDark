import {useRef} from "react"; 
import classes from "./Input.module.css";

const Input = (props) => {
  const ref = useRef(); 
  return <input type="textarea" placeholder={props.placeholder} className={classes.input} ref={ref} onChange={() => props.handleChange(ref)}/>;
};

export default Input;
