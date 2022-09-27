import Feature from "./Feature/Feature";
import featuresData from "./featuresData.json";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <div className={classes.features}>
      {featuresData.map((feature) => {
        return (
          <Feature
            title={feature.title}
            paragraph={feature.paragraph}
            index={feature.index}
            alt={feature.alt}
          />
        );
      })}
    </div>
  );
};

export default Features;
