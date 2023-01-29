import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <input type="text" placeholder="Search for package" />
    </header>
  );
}
