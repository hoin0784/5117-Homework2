import Link from 'next/link';
import styles from './NavBar.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Navbar({ UserButton }) {

  return (
    <header>
      <nav className={styles.navbar}>

        <Link href="/">
          <img src="/UofM.jpeg" alt="MyPic" className={styles.navbar__logo} />
        </Link>

        <ul className={styles.navbar__menu}>
          <li>
            <Link href="/"> Home</Link>
          </li>

          <li>
            <Link href="/AddAll"> Add/All</Link>
          </li>

          <li>
            <Link href="/Active"> Active</Link>
          </li>

          <li>
            <Link href="/Completed"> Completed</Link>
          </li>
        </ul>

        <ul className={styles.navbar__icons}>
          <li>
            <Link href="https://github.com/csci5117s23/homework-2-hoin0784"><BsGithub /></Link>
          </li>

          <li>
            <Link href="https://www.linkedin.com/in/hoin-jang-896036215"><BsLinkedin /></Link>
          </li>

          <li>
            {UserButton}
          </li>
        </ul>
      </nav>
    </header>
  )
}

