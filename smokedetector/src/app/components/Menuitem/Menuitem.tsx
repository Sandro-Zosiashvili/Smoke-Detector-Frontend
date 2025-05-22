'use client'

import styles from './Menuitem.module.scss'
import { useRouter } from 'next/navigation';


type MenuitemType = {
    title: String;
    path: String;
    // key: String
}


const Menuitem = () => {

    const router = useRouter()




    const data = [
        {
            title: 'Home',
            path: '/',

        },
        {
            title: 'about us',
            path: './aboutus',
        },
        {
            title: 'Contact',
            path: '/Contact',
        },

    ]


    return (
        <div className={styles.container}>

            {
                data.map((item: MenuitemType, index) => (
                    <div onClick={() => router.push(`${item.path}`)} className={styles.menuItem} key={index}>
                        {item.title}
                    </div>
                ))
            }
        </div>

    )


}

export default Menuitem