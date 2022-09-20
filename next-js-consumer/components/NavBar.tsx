import styles from '../styles/NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" data-sveltekit-reload>Homepage</a>
      <a href="/content" data-sveltekit-reload>Svelte integrated content</a>
    </nav>
  );
}

export default NavBar;