import Image from "next/image";
import styles from "./page.module.css";
import Menuitem from "./components/Menuitem/Menuitem";
import Menu from "./components/Menu/Menu";

export default function Home() {

  return (

    <div className={styles.container}>

      <div className={styles.containerContent}>
        <div className={styles.aboutus}>
          Lorem ipsum  autem repudiandae explicabo quas illum ratione similique est, nam reprehenderit at molestias ullam. Autem!
        </div>
        <button className={styles.button}>
          Get started
        </button>

      </div>
    </div >
  );
}
