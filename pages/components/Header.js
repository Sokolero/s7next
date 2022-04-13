import React from "react";
import Link from "next/link";
import styles from '../../styles/Header.module.css';
import ActiveLink from "./ActiveLink";
import {useSelector, useDispatch} from "react-redux";
import { logout } from "../redux/actions";

export default function Header() {
  const token = useSelector((state) => state.login.credentials.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Link href="/">Logo</Link>          
        </span>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li className={styles.nav__item}>
              <ActiveLink href="/users">Users</ActiveLink>
            </li>
            <li className={styles.nav__item}>
              <ActiveLink href="/profile">Profile</ActiveLink>
            </li>
            <li className={styles.nav__item}>
              { token ? <button onClick={ handleLogout } className="btn">Logout</button> : null }
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
