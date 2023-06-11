import { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineMenu } from "react-icons/ai";

import useScreen from "../hooks/useScreen";

import Logo from "../assets/images/logo.svg";

import styles from "./Header.module.scss";

const menu = (
  <nav className={styles.menu}>
    <ul>
      <div>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </div>
      <div className={styles.action}>
        <li>Login</li>
        <li className={styles.highlighted}>Sign Up</li>
      </div>
    </ul>
  </nav>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isMobileScreen } = useScreen();

  const menuClickHandler = () => setIsMenuOpen((prevMenu) => !prevMenu);

  return (
    <header className={styles.container}>
      <img src={Logo} alt="Shortly" />
      {isMobileScreen ? (
        <button onClick={menuClickHandler}>
          <AiOutlineMenu />
        </button>
      ) : (
        menu
      )}

      {isMobileScreen &&
        isMenuOpen &&
        createPortal(menu, document.getElementById("overlay") as HTMLElement)}
    </header>
  );
};

export default Header;
