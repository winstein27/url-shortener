import Working from "../assets/images/illustration-working.svg";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <img src={Working} alt="" className={styles["main-img"]} />
      <h1 className={styles.slogan}>More than just shorter links</h1>
      <p className={styles.detail}>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <a href="#">Get Started</a>
    </main>
  );
};

export default Main;
