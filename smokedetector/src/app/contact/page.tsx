import styles from './page.module.scss'


const contact = () => {

    return (
        <div className={styles.container}>
            <div className={styles.topCenter}></div>
            <div className={styles.title}>
                Contact
            </div>
            <div className={styles.information}>
                Contact Us
                If you have questions, feedback, or would like to collaborate, please reach out to any of us at the
                following email addresses:
                <div className={styles.contacts}>
                    <div className={styles.contCont}>Nika Iniashvili –</div>
                    <div className={styles.contCont}>Luka Namoradze – luka.namoradze809@ens.tsu.edu.ge</div>
                    <div className={styles.contCont}>Giorgi Aptsiauri –</div>
                    <div className={styles.contCont}>Luka Kakriashvili –</div>
                </div>
                Thank you for your interest in our project
            </div>
        </div>

    )

}
export default contact