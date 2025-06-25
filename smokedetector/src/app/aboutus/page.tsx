import styles from './page.module.scss'

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div  className={styles.topCenter}>

            </div>
            <h1 className={styles.title}>About Us</h1>
            <div className={styles.flex}>
                <div className={styles.leftContent}>
                    {/* <Image className={styles.logoo} src={'/Images/smoke.jpeg'} width={100} height={100} alt="designlogo" /> */}
                    <p className={styles.paragraph}>
                        We are a team of four undergraduate students at Tbilisi State University, pursuing our bachelor’s degrees in Computer Science. Our names are:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Nika Iniashvili</strong> – data processing and EDA</li>
                        <li className={styles.listItem}><strong>Luka Namoradze</strong> – Machine Learning</li>
                        <li className={styles.listItem}><strong>Giorgi Aptsiauri</strong> – frontend development</li>
                        <li className={styles.listItem}><strong>Luka Kakriashvili</strong> – backend development</li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our capstone project (bachelor’s thesis) aims to build an interactive web application that predicts smoking status based on clinical and biosignal data.
                        We believe that leveraging machine learning in healthcare can empower both clinicians and individuals by providing quick, evidence-based insights.
                    </p>
                </div>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Collected and preprocessed a large-scale health dataset from Kaggle (Playground S3E24)</li>
                        <li className={styles.listItem}>Engineered features and performed exploratory data analysis (EDA)</li>
                        <li className={styles.listItem}>Trained and fine-tuned several ML models; selected an XGBoost classifier</li>
                        <li className={styles.listItem}>Exported model to ONNX for cross-platform compatibility</li>
                        <li className={styles.listItem}>Developed responsive web UI for input and prediction</li>
                        <li className={styles.listItem}>Deployed the app to a cloud server for access from any browser</li>
                    </ul>
                    <p className={styles.paragraph}>
                        This solution not only shows the power of data-driven healthcare tools, but also serves as a foundation for future improvements – such as adding additional health metrics, integrating with EHR systems, or expanding to other risk predictions.
                    </p>
                </div>

            </div>
            <div className={styles.rightContent}>
            </div>
        </div>
    );
}
