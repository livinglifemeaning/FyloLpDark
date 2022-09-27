import classes from "./Button.module.css"; 

const Button = (props) => {
  return (
    <div className={classes.btn} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
