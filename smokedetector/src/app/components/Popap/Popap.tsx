'use client'
import styles from './Popap.module.scss'
import Image from 'next/image'


type Props = {
    close: () => void


}



const Popap = (props: Props) => {



    return (
        <div className={styles.container}>
            <div onClick={props.close} className={styles.close}>
                <Image src={'/Images/icon.png'} width={20} height={20} alt={'popap-closer'} />

            </div>

            <div className={styles.result}>
                <div className={styles.font}>
                    Result
                </div>


            </div>
            <div className={styles.predict}>
                predict:
            </div>

        </div>

    )
}


export default Popap