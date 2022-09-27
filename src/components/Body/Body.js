import { useState } from "react";
import Features from "./Features/Features";
import StayProductive from "./StayProductive/StayProductive";
import Reviews from "./Reviews/Reviews";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./Body.module.css";

const Body = () => {
  const [emailValid, setEmailValid] = useState("undefined"); 
  const [input, setInput] = useState(); 
  const getRefValue = (e) => {
    setInput(e.current.value)
  };
  const validateEmail = () =>{
    if(String(input).toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmailValid("true")
    } else{
      setEmailValid("false"); 
    }
  }
  return (
    <div className={classes.body}>
      <Features />
      <StayProductive />
      <Reviews />
      <div className={classes.earlyAccess}>
        <p className={classes.title}>Get early access today</p>
        <p className={classes.message}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={classes.buttonBox}>
        <Input placeholder="email@example.com" handleChange={getRefValue} />
        {emailValid === "false" && <p className={classes.invalid}>Please enter a valid email address</p>}
        <Button onClick={validateEmail}>Get Started For Free</Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
