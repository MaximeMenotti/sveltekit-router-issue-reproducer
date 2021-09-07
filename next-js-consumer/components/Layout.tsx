import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from '../styles/Layout.module.css'

function Layout({children}: {children: JSX.Element}): JSX.Element {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;