import React from "react";
import Link from "next/link";
import styles from '../../styles/Footer.module.css';
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <div className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="/" className={styles.nav__link}>
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/users" className={styles.nav__link}>
                <a>Users</a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/profile" className={styles.nav__link}>
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
