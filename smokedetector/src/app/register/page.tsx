'use client'
import styles from './page.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react'
import Popap from '../components/Popap/Popap'
import axios from 'axios'
import { error } from 'console'




interface IFormInput {
    age: number
}
type Inputs = {
    age: number;
    weight: number;
    height: number;
    waist: number;
    hemoglobin: string;
    systolic: string;
    hdl: string;
    triglyceride: string;
    bloodSugar: string;
    cholesterol: string
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
        setPopap(!popap);

        // if (!errors.age) {
        //     window.scrollTo({ top: 100, behavior: 'smooth' });
        //     console.log('shemodis')
        // }
    }

    const keyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) &&
            !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    }


    const [popap, setPopap] = useState(false)





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
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {
                                            errors.age && <span>This feild is required</span>
                                        }
                                    </span>
                                    <input {...register('age', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3,



                                    })} className={styles.inputStyle} placeholder='year' type='text'
                                        onKeyDown={(e) => keyKeyDown(e)}
                                        maxLength={3}

                                    />


                                </div>

                            </div>





                            <div className={styles.insideCenter}>
                                <label className={styles.font}>
                                    HEIGHT
                                </label>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {
                                            errors.height && <span>This feild is required</span>
                                        }

                                    </span>
                                    <input {...register('height', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3,

                                    })} className={styles.inputStyle} placeholder='cm' type='text'
                                        onKeyDown={(e) => keyKeyDown(e)}
                                        maxLength={3}

                                    />
                                </div>
                            </div>






                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    WEIGHT
                                </div>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {
                                            errors.weight && <span>This feild is required</span>
                                        }

                                    </span>
                                    <input className={styles.inputStyle}  {...register('weight', {
                                        required: true,
                                        valueAsNumber: true
                                    })} placeholder='WEIGHT' type='text'
                                        onKeyDown={(e) => keyKeyDown(e)}
                                        maxLength={3}

                                    />
                                </div>

                            </div>






                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    WAIST
                                </div>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {
                                            errors.waist && <span>This feild is required</span>
                                        }

                                    </span>
                                    <input {...register('waist', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3
                                    })} className={styles.inputStyle} placeholder='cm' type='text'
                                        onKeyDown={(e) => keyKeyDown(e)}
                                        maxLength={3}

                                    />

                                </div>

                            </div>







                            <div className={styles.insideCenter}>
                                <div className={styles.font}>
                                    HEMOGLOBIN
                                </div>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {
                                            errors.hemoglobin && <span>This feild is required</span>
                                        }

                                    </span>
                                    <select defaultValue="" {...register('hemoglobin', {
                                        required: true,
                                    })} className={styles.inputStyle}>
                                        <option value="" disabled>HB...</option>
                                        <option value="13.8 - 17.2">13.8 - 17.2</option>
                                        <option value="More than 17.5">More than 17.5</option>
                                        <option value="Less than 13.8">Less than 13.8</option>
                                    </select>
                                </div>

                            </div>






                        </div>
                    </div>
                    <div className={styles.feildTwo}>




                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                SYSTOLIC
                            </div>
                            <div className={styles.flex}>
                                <select {...register('systolic', {
                                    required: true
                                })} defaultValue="" className={styles.inputStyle}>
                                    <option value="" disabled>mmHG...</option>
                                    <option value="90-120">90 - 120</option>
                                    <option value="More than 130">More than 130</option>
                                    <option value="Less than 90">Less than 90</option>
                                </select>
                                <span className={styles.redred}>
                                    {
                                        errors.systolic && <span>This feild is required</span>
                                    }

                                </span>
                            </div>
                        </div>






                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                FASTING BLOOD SUGAR
                            </div>
                            <div className={styles.flex}>
                                <select {...register('bloodSugar', {
                                    required: true
                                })} defaultValue="" className={styles.inputStyle}>
                                    <option value="" disabled>mmoI/L...</option>
                                    <option value="70 - 99">70 - 99</option>
                                    <option value="100 - 125">100 - 125</option>
                                    <option value="More than 125">More than 125</option>
                                </select>
                                <span className={styles.redred}>
                                    {
                                        errors.bloodSugar && <span>This feild is required</span>
                                    }

                                </span>
                            </div>
                        </div>





                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                CHOLESTEROL
                            </div>
                            <div className={styles.flex}>
                                <select {...register('cholesterol', {
                                    required: true
                                })} defaultValue="" className={styles.inputStyle}>
                                    <option value="" disabled>mmoI/L...</option>
                                    <option value="Less than 3.0">Less than 3.0</option>
                                    <option value="More than 1.0">More than 1.0</option>
                                </select>
                                <span className={styles.redred}>
                                    {
                                        errors.cholesterol && <span>This feild is required</span>
                                    }

                                </span>
                            </div>
                        </div>





                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                TRIGLYCERIDE
                            </div>
                            <div className={styles.flex}>
                                <select {...register('triglyceride', {
                                    required: true
                                })} defaultValue="" className={styles.inputStyle}>
                                    <option value="" disabled>mmoI/L...</option>
                                    <option value="Less than 1.7">Less than 1.7</option>
                                    <option value="2.3 - 5.6">2.3 - 5.6</option>
                                    <option value="More than 5.6">More than 5.6</option>
                                </select>
                                <span className={styles.redred}>
                                    {
                                        errors.triglyceride && <span>This feild is required</span>
                                    }

                                </span>
                            </div>
                        </div>





                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                HDL
                            </div>
                            <div className={styles.flex}>
                                <select {...register('hdl', {
                                    required: true
                                })} defaultValue="" className={styles.inputStyle}>
                                    <option value="" disabled>mmoI/L...</option>
                                    <option value="Less than 1.0">Less than 1.0</option>
                                    <option value="More than 1.5">More than 1.5</option>
                                    <option value="More than 2.0">More than 2.0</option>
                                </select>
                                <span className={styles.redred}>
                                    {
                                        errors.hdl && <span>This feild is required</span>
                                    }

                                </span>

                            </div>


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