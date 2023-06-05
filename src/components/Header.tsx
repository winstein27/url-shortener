import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Shortly</h1>
      <AiOutlineMenu />
    </header>
  );
};

export default Header;
