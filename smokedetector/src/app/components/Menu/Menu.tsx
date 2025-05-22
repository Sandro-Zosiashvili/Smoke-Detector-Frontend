'use client'
import Menuitem from '../Menuitem/Menuitem'
import styles from './Menu.module.scss'
// import Image from 'next/image'
import Image from 'next/image'

import { useRouter } from 'next/navigation'





const Menu = () => {

    const router = useRouter()


    return (
        <div className={styles.container}>

            <div onClick={() => router.push('./')} className={styles.logoWrapper}>
                <Image className={styles.logoo} src={'/Images/smoke.jpeg'} width={100} height={100} alt="designlogo" />
                <div>
                    SMOpredict
                </div>
            </div>
                <Menuitem />

        </div>

    )
}



export default Menu