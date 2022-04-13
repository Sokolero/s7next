import React from "react";
import Link from "next/link";
import styles from "../../styles/Users.module.css";
import { removeUser } from "../redux/actions";


const User = ({ user, dispatch }) => {
  return (
      <li className={styles.users__item}>
        <Link
          href={{
            pathname: "/users/[id]",
            query: { id: user.id }
          }}
        >
          <a className={styles.users__link}>
            <img className={styles.users__avatar} src={ user.avatar || "user.png" } alt="avatar" />
            <span className={styles.users__fullname}>
              {user.first_name} {user.last_name}
            </span>
            <span className={styles.users__email}>{user.email}</span>
          </a>
        </Link>
        <span onClick={() => dispatch(removeUser(user.id))} className={styles.remove}>Remove</span>
      </li>
    );
  };

export default User;
