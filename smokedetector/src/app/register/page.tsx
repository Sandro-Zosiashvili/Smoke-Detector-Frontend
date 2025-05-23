'use client'
import styles from './page.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react'
import Popap from '../components/Popap/Popap'
import axios from 'axios'




interface IFormInput {
    age: number
}
type Inputs = {
    age: number;
    gender: string;
    weight: string
}


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data, 'esaaa')
        axios.post('http:', data)
        if (!errors.age) {
            window.scrollTo({ top: 100, behavior: 'smooth' });
            setPopap(!popap);
            console.log('shemodis')
        }
    }


    const [popap, setPopap] = useState(false)


    const onSubmitTwo = () => {
        console.log(!!errors.age)
        // if(!errors.age === true) {
        //     window.scrollTo({ top: 100, behavior: 'smooth' });
        //     setPopap(!popap);
        //     console.log('shemodis')
        // }
    }



    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.flexAlign}>
                <div className={styles.input}>
                    <div className={styles.feidOne}>
                        <div className={styles.feidOne}>



                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    AGE
                                </div>
                                <span>
                                    {
                                        errors.age?.type === 'required' &&
                                        <div>
                                            this feild is required
                                        </div>
                                    }
                                </span>
                                <input {...register('age', {
                                    required: true,
                                })} className={styles.inputStyle} placeholder='year' type='text' />
                            </div>





                            <div className={styles.insideCenter}>
                                <label className={styles.font}>
                                    HEIGHT
                                </label>
                                <input className={styles.inputStyle} placeholder='cm' type='text' />
                            </div>






                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    WEIGHT
                                </div>
                                <select className={styles.inputStyle} {...register('weight', {
                                    required: true

                                })}>
                                    <option value="">Select weight...</option>
                                    <option value="80kg">85cm</option>
                                    <option value="80kg">90cm</option>
                                    <option value="80kg">100cm</option>
                                </select>
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
                <input type="submit" className={styles.buttonTwo} />
            </form>
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