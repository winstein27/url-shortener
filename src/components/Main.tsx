import Working from "../assets/images/illustration-working.svg";

import styles from "./Main.module.scss";

import ShortenForm from "./main/ShortenForm";
import Features from "./main/Features";

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.description}>
        <img src={Working} alt="" className={styles["main-img"]} />
        <div>
          <h1 className={styles.slogan}>More than just shorter links</h1>
          <p className={styles.detail}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#" className={styles.button}>
            Get Started
          </a>
        </div>
      </div>

      <ShortenForm />
      <Features />

      <div className={styles.boost}>
        <h2>Boost your links today</h2>
        <a href="#" className={styles.button}>
          Get Started
        </a>
      </div>
    </main>
  );
};

export default Main;
