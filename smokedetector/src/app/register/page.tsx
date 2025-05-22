'use client'
import styles from './page.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react'
import Popap from '../components/Popap/Popap'



type Inputs = {
    example: string
    exampleRequired: string
}




const Register = () => {


    const [popap, setPopap] = useState(false)


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm<any>()
    // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)



    return (
        <div className={styles.container}>
            <div className={styles.flexAlign}>
                <div className={styles.input}>
                    <div className={styles.feidOne}>
                        <div className={styles.feidOne}>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    AGE
                                </div>
                                <input className={styles.inputStyle} placeholder='year' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    HEIGHT
                                </div>
                                <input className={styles.inputStyle} placeholder='cm' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    WEIGHT
                                </div>
                                <input className={styles.inputStyle} placeholder='kg' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    WAIST
                                </div>
                                <input className={styles.inputStyle} placeholder='cm' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    EYESIGHT
                                </div>
                                <input className={styles.inputStyle} placeholder='LEFT' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    EYESIGHT

                                </div>
                                <input className={styles.inputStyle} placeholder='RIGHT' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    HEARING
                                </div>
                                <input className={styles.inputStyle} placeholder='left' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    HEARING

                                </div>
                                <input className={styles.inputStyle} placeholder='right' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    LDL
                                </div>
                                <input className={styles.inputStyle} placeholder='mmoI/L' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    HEMOGLOBIN
                                </div>
                                <input className={styles.inputStyle} placeholder='g/L' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    URINE PROTEIN
                                </div>
                                <input className={styles.inputStyle} placeholder='g/L' type='text' />
                            </div>
                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    SERUM CREATININE
                                </div>
                                <input className={styles.inputStyle} placeholder='micromoles' type='text' />
                            </div>

                        </div>
                    </div>
                    <div className={styles.feildTwo}>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                AST
                            </div>
                            <input className={styles.inputStyle} placeholder='U/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                ALT
                            </div>
                            <input className={styles.inputStyle} placeholder='U/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                GTP
                            </div>
                            <input className={styles.inputStyle} placeholder='U/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                DENTAL CARIES
                            </div>
                            <input className={styles.inputStyle} placeholder='Num of teeth' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                SYSTOLIC
                            </div>
                            <input className={styles.inputStyle} placeholder='mmHg' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                RELAXATION
                            </div>
                            <input className={styles.inputStyle} placeholder='mmHg' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                FASTING BLOOD SUGAR
                            </div>
                            <input className={styles.inputStyle} placeholder='mmoI/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                CHOLESTEROL
                            </div>
                            <input className={styles.inputStyle} placeholder='mmoI/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                TRIGLYCERIDE
                            </div>
                            <input className={styles.inputStyle} placeholder='mmoI/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                HDL
                            </div>
                            <input className={styles.inputStyle} placeholder='mmoI/L' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                SMOKING
                            </div>
                            <input className={styles.inputStyle} placeholder='smoker/nonSmoker' type='text' />
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                age
                            </div>
                            <input className={styles.inputStyle} placeholder='' type='text' />
                        </div>


                    </div>
                </div>
                <button onClick={() => setPopap(!popap)} className={styles.buttonTwo}>
                    Predict
                </button>

            </div>


            {
                popap &&
                <div className={styles.popap}>
                    <Popap close={() => setPopap(!popap)} />
                </div>
            }


        </div >
    )
}


export default Register