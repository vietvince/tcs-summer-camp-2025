import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="/img/tcs-logo-white.png"
        alt="TCS Logo"
        className={styles.tcslogo}
      />
      <img
        src="/img/aatl-horizontal-logo.webp"
        alt="TCS Logo"
        className={styles.aatllogo}
      />
      <div className={styles.titlecontainer}>
        <h1 className={styles.header1}>Summer Creator Hub</h1>
        <h3 className={styles.header2}>
          by theCoderSchool and Academy at the Lakes
        </h3>
      </div>
    </header>
  );
};

export default Header;
