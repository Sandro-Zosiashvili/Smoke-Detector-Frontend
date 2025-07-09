import React, {useEffect, useState} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import styles from './Loader.module.scss';




const Loader = () => {
    const [percentage, setPercentage] = useState(0);

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

    const getText = () => {
        if (percentage < 20) return 'Analyzing health data...';
        if (percentage < 60) return 'Running AI predictions models...';
        if (percentage < 80) return 'Generating recommendations... ';
        if (percentage < 95) return 'Preparing personalized plan...';
        if (percentage < 100) return 'Finished!';
    };

    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.circle}>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#8c98b0',
                        trailColor: 'rgba(255, 255, 255, 0.05)',
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.3,
                    })}
                />
            </div>
            <div className={styles.textBelow}>{getText()}</div>
        </div>
    );
};

export default Loader;
