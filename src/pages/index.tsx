import Image from "next/image";
import Head from "next/head";
import eFront from '../assets/eFront.svg'

import styles from "@/styles/Home.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsletter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.width}>
          <Image src={eFront} alt=''/>
          <h1>Seja bem-vindo a sua melhor newsletter</h1>
          <h2>Fique por dentro de todas a novidades</h2>
          <p>Preencha os campos para receber as notícias sobre programação</p>
          <div className={styles.input}>
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.input}>
            <label htmlFor="">E-mail</label>
            <input type="text" name="" id="" />
          </div>
          <button className={styles.button}>Enviar</button>
        </div>
      </main>
    </>
  );
}
