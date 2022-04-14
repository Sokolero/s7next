import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions";


export default function Login() {
  const { handleSubmit, register, clearErrors, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);
  const router = useRouter();
  const [preloader, setPreloader] = useState(false);

  const onSubmit = async (data) => {
    setPreloader(true);
    try{
      await dispatch(login(
        data.email,
        data.password
      ));
      setPreloader(false);
      router.push("/profile");
    } catch(error) {
      setPreloader(false);
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      { preloader ? <div className={styles.preloader}>U</div> : null }
      <h2 className={styles.h2}>Please, sign in <br/> or<br/>
        <Link  href="/">
          <a className={styles.link}>return to Home</a>
        </Link>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form} action="">
        <label className={styles.label} htmlFor="email">Email:</label>
        <input className={styles.input} {...register("email", { required: true }) } type="email" name="email"/>
        <small className={styles.error}>
          {errors.email?.type === "required" && "Email is required"}
        </small>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input className={styles.input} {...register("password", { required: true }) } type="password" name="password"/>
        <small className={styles.error}>
          {errors.password?.type === "required" && "Password is required"}
        </small>
        <button className={styles.submit} disabled={preloader} type="submit">Sign in</button>
          <small className={styles.error}>
            { error }
          </small>
      </form>
    </div>
  )
}
