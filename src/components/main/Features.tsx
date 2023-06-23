import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className={styles.features}>
      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div>
        <div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each link. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
