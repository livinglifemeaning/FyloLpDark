import Button from "../../UI/Button";
import HeroImg from "./illustration-intro.png";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img
        src={HeroImg}
        alt="Illustration of two people pulling out files from a folder"
      />
        <p className={classes.title}>All your files in one secure location, accessible anywhere.</p>
        <p className={classes.desc}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <Button>Get Started</Button>
    </div>
  );
};

export default Hero;
