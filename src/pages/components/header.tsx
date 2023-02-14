import Image from "next/image";
import eFront from '../../assets/eFront.svg'
import styles from '@/styles/Header.module.css'

export default function Header(){
  return(
    <nav className={styles.nav}>
      <Image src={eFront} alt=''/>
      <button>COMPRAR EBOOK</button>
    </nav>
  )
}