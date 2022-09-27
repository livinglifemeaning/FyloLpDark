import Profile1 from "./profile-1.jpg"; 
import Profile2 from "./profile-2.jpg"; 
import Profile3 from "./profile-3.jpg"; 
import classes from "./Review.module.css";

const IMAGES = [Profile1, Profile2, Profile3]
const Review = ({ name, index }) => {
  return (
    <div className={classes.review}>
      <p className={classes.message}>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className={classes.profileBox}>
        <img src={IMAGES[index]} alt={name}/>
        <div>
            <p className={classes.name}>{name}</p>
            <p className={classes.position}>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
