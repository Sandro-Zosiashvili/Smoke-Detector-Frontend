'use client'
import styles from "./page.module.css";
import Menuitem from "./components/Menuitem/Menuitem";
import Menu from "./components/Menu/Menu";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter()

    return (

        <div className={styles.container}>

            <div className={styles.containerContent}>
                <div className={styles.aboutus}>
                    Find out if you're a smoker — even if you don't realize it.
                </div>
                <button onClick={() => router.push('register')} className={styles.button}>
                    Get started
                </button>

            </div>
        </div>
    );
}
