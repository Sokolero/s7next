import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import ActiveLink from "./components/ActiveLink";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.welcome__text}>Welcome!</div>
        </div>
      </main>
      <Footer />
      </div>
  )
}
