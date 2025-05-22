'use client'
import Menuitem from '../Menuitem/Menuitem'
import styles from './Menu.module.scss'
// import Image from 'next/image'
import Image from 'next/image'





const Menu = () => {


    return (
        <div className={styles.container}>

            <div className={styles.logoWrapper}>
                <Image className={styles.logoo} src={'/Images/smoke.jpeg'} width={100} height={100} alt="designlogo" />
                <div>
                    SMOpredic
                </div>
            </div>
                <Menuitem />

        </div>

    )
}



export default Menu