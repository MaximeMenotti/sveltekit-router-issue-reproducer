import styles from '../styles/NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">Homepage</a>
      <a href="/content">Svelte integrated content</a>
    </nav>
  );
}

export default NavBar;