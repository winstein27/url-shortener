import Working from "../assets/images/illustration-working.svg";

import styles from "./Main.module.scss";

import ShortenForm from "./main/ShortenForm";

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
          <a href="#">Get Started</a>
        </div>
      </div>

      <ShortenForm />
    </main>
  );
};

export default Main;
