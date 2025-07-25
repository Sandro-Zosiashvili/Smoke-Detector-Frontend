'use client'

import styles from './Menuitem.module.scss'
import {useRouter} from 'next/navigation';
import {useState} from "react";


type MenuitemType = {
    title: String;
    path: String;
    // key: String
}


const Menuitem = () => {
    const router = useRouter()
    const [active, setActive] = useState<number>(0);

    const data = [
        {
            id: 1,
            title: 'Home',
            path: '/',

        },
        {
            id: 2,
            title: 'about us',
            path: './aboutus',
        },
        {
            id: 3,
            title: 'Contact',
            path: '/contact',
        },

    ]
    return (
        <div className={styles.container}>

            {
                data.map((item: MenuitemType, index) => (
                    <div onClick={() => {
                        router.push(`${item.path}`)
                        setActive(index)
                    }} className={active == index ? styles.active : styles.menuItem} key={index}>
                        {item.title}
                    </div>
                ))
            }
        </div>

    )


}

export default Menuitem