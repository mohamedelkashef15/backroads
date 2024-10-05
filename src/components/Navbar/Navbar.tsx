import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../images/logo.svg";
import { faFacebook, faSquarespace, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <img src={Logo} alt="backroads" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#tours">Tours</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://squarespace.com">
            <FontAwesomeIcon icon={faSquarespace} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
