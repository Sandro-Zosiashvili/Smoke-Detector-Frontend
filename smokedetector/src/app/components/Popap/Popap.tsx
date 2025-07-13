'use client'
import styles from './Popap.module.scss'
import Image from 'next/image'
import Loader from "@/app/components/loader/Loader";
import {useEffect, useState} from "react";


type Props = {
    close: () => void;
    percentage: string;
    recomendation: string;


}


const Popap = (props: Props) => {
    const [percentage, setPercentage] = useState(0);

    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (percentage === 100) {
            setActive(true);
        }
    }, [percentage]);

    const progressFinish = () => {
        if (percentage < 100) return setActive(true);

    };


    return (
        <div className={styles.container}>
            <div onClick={props.close} className={styles.close}>
                <Image src={'/Images/icon.png'} width={20} height={20} alt={'popap-closer'}/>

            </div>
            {active &&
                <div className={styles.result}>
                    <div className={styles.font}>
                        Result
                    </div>
                </div>

            }
            {
                !active &&
                <div className={styles.result}>
                    <div className={styles.font}>
                        Loading...
                    </div>
                </div>
            }
            {
                active &&
                <div className={styles.predict}>
                    <div>
                        predict: {props.percentage}
                    </div>
                    <div className={styles.recomendation}>
                        {props.recomendation}
                    </div>
                </div>
            }
            {
                !active &&
                <div className={styles.loader}>
                    <Loader/>
                </div>
            }
        </div>

    )
}


export default Popap