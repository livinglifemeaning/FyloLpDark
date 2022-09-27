import Review from "./Review/Review"; 
import Quotes from "./bg-quotes.png"; 
import reviewsData from "./reviewsData.json"; 
import classes from "./Reviews.module.css"; 

const Reviews = () => {
  return (
    <div className={classes.reviews}>
      {reviewsData.map(review => <Review name={review.name} index={review.index}/>)}
      <img src={Quotes} alt="" className={classes.quote}/>
    </div>
  )
}

export default Reviews
