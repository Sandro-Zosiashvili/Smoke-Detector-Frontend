'use client'
import styles from './page.module.scss'
import {useForm, SubmitHandler} from "react-hook-form"
import {useState} from 'react'
import Popap from '../components/Popap/Popap'
import axios from 'axios'
import {error} from 'console'


type Inputs = {
    Age: number;
    WeightKg: number;
    HeightCm: number;
    WaistCm: number;
    Hemoglobin: string;
    Systolic: string;
    HDL: string;
    Triglyceride: string;
    FastingBloodSugar: string;
    Cholesterol: string
}

const Register = () => {
    const [popap, setPopap] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data, 'მიდის')
        axios.post("https://localhost:7168", data)
            .then((r) => {
                console.log(r)
                console.log("ბექში გაიგზავნა")

            })
        setPopap(!popap);
        reset()
    }

    const keyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) &&
            !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
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
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {errors.Age?.type === 'required' && <p>This field is required</p>}
                                        {errors.Age?.type === 'min' && <p>{errors.Age.message}</p>}
                                        {errors.Age?.type === 'max' && <p>{errors.Age.message}</p>}
                                    </span>
                                    <input {...register('Age', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3,
                                        min: {
                                            value: 1,
                                            message: "Min age is 1"

                                        },
                                        max: {
                                            value: 120,
                                            message: "Max age is 120"

                                        }

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
                                        {errors.HeightCm?.type === 'required' && <p>This field is required</p>}
                                        {errors.HeightCm?.type === 'min' && <p>{errors.HeightCm.message}</p>}
                                        {errors.HeightCm?.type === 'max' && <p>{errors.HeightCm.message}</p>}
                                    </span>
                                    <input {...register('HeightCm', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3,
                                        min: {
                                            value: 50,
                                            message: "Min height is 50"

                                        },
                                        max: {
                                            value: 250,
                                            message: "Max height is 250"

                                        }

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
                                        {errors.WeightKg?.type === 'required' && <p>This field is required</p>}
                                        {errors.WeightKg?.type === 'min' && <p>{errors.WeightKg.message}</p>}
                                        {errors.WeightKg?.type === 'max' && <p>{errors.WeightKg.message}</p>}

                                    </span>
                                    <input className={styles.inputStyle}  {...register('WeightKg', {
                                        required: true,
                                        valueAsNumber: true,
                                        min: {
                                            value: 10,
                                            message: "Min weight is 10"

                                        },
                                        max: {
                                            value: 300,
                                            message: "Max weight is 300"

                                        }
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
                                        {errors.WaistCm?.type === 'required' && <p>This field is required</p>}
                                        {errors.WaistCm?.type === 'min' && <p>{errors.WaistCm.message}</p>}
                                        {errors.WaistCm?.type === 'max' && <p>{errors.WaistCm.message}</p>}
                                    </span>
                                    <input {...register('WaistCm', {
                                        required: true,
                                        valueAsNumber: true,
                                        maxLength: 3,
                                        min: {
                                            value: 30,
                                            message: "Min waist is 30"

                                        },
                                        max: {
                                            value: 200,
                                            message: "Max waist is 200"

                                        }
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
                                        {errors.Hemoglobin?.type === 'required' && <p>This field is required</p>}
                                        {errors.Hemoglobin?.type === 'min' && <p>{errors.Hemoglobin.message}</p>}
                                        {errors.Hemoglobin?.type === 'max' && <p>{errors.Hemoglobin.message}</p>}
                                    </span>
                                    <input defaultValue="" {...register('Hemoglobin', {
                                        required: true,
                                        min: {
                                            value: 5,
                                            message: "Min hemoglobin is 5"

                                        },
                                        max: {
                                            value: 20,
                                            message: "Max hemoglobin is 20"

                                        }
                                    })} placeholder='HB' type='text'
                                           onKeyDown={(e) => keyKeyDown(e)}
                                           className={styles.inputStyle}/>
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
                                <input {...register('Systolic', {
                                    required: true,
                                    min: {
                                        value: 5,
                                        message: "Min systolic is 5"

                                    },
                                    max: {
                                        value: 20,
                                        message: "Max systolic is 20"

                                    }
                                })} placeholder='mmHG' type='text'
                                       onKeyDown={(e) => keyKeyDown(e)}
                                       className={styles.inputStyle}/>

                                <span className={styles.redred}>
                                    {errors.Systolic?.type === 'required' && <p>This field is required</p>}
                                    {errors.Systolic?.type === 'min' && <p>{errors.Systolic.message}</p>}
                                    {errors.Systolic?.type === 'max' && <p>{errors.Systolic.message}</p>}

                                </span>
                            </div>
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                FASTING BLOOD SUGAR
                            </div>
                            <div className={styles.flex}>
                                <input {...register('FastingBloodSugar', {
                                    required: true,
                                    min: {
                                        value: 40,
                                        message: "Min fasting blood sugar is 40"

                                    },
                                    max: {
                                        value: 500,
                                        message: "Max fasting blood sugar is 500"

                                    }
                                })} type='text' placeholder='mmoI/L'
                                       onKeyDown={(e) => keyKeyDown(e)}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.FastingBloodSugar?.type === 'required' && <p>This field is required</p>}
                                    {errors.FastingBloodSugar?.type === 'min' &&
                                        <p>{errors.FastingBloodSugar.message}</p>}
                                    {errors.FastingBloodSugar?.type === 'max' &&
                                        <p>{errors.FastingBloodSugar.message}</p>}
                                </span>
                            </div>
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                CHOLESTEROL
                            </div>
                            <div className={styles.flex}>
                                <input {...register('Cholesterol', {
                                    required: true,
                                    min: {
                                        value: 100,
                                        message: "Min Cholesterol is 100"

                                    },
                                    max: {
                                        value: 400,
                                        message: "Max Cholesterol is 400"

                                    }
                                })} type='text' placeholder="mmoI/L"
                                       onKeyDown={(e) => keyKeyDown(e)}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.Cholesterol?.type === 'required' && <p>This field is required</p>}
                                    {errors.Cholesterol?.type === 'min' && <p>{errors.Cholesterol.message}</p>}
                                    {errors.Cholesterol?.type === 'max' && <p>{errors.Cholesterol.message}</p>}
                                </span>
                            </div>
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                TRIGLYCERIDE
                            </div>
                            <div className={styles.flex}>
                                <input {...register('Triglyceride', {
                                    required: true,
                                    min: {
                                        value: 20,
                                        message: "Min triglyceride is 20"

                                    },
                                    max: {
                                        value: 1000,
                                        message: "Max triglyceride is 1000"

                                    }
                                })} type='text' placeholder='mmoI/L'
                                       onKeyDown={(e) => keyKeyDown(e)}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.Triglyceride?.type === 'required' && <p>This field is required</p>}
                                    {errors.Triglyceride?.type === 'min' && <p>{errors.Triglyceride.message}</p>}
                                    {errors.Triglyceride?.type === 'max' && <p>{errors.Triglyceride.message}</p>}
                                </span>
                            </div>
                        </div>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>
                                HDL
                            </div>
                            <div className={styles.flex}>
                                <input {...register('HDL', {
                                    required: true,
                                    min: {
                                        value: 10,
                                        message: "Min triglyceride is 10"

                                    },
                                    max: {
                                        value: 150,
                                        message: "Max triglyceride is 150"

                                    }
                                })} type="text" placeholder='mmoI/L'
                                       onKeyDown={(e) => keyKeyDown(e)}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.HDL?.type === 'required' && <p>This field is required</p>}
                                    {errors.HDL?.type === 'min' && <p>{errors.HDL.message}</p>}
                                    {errors.HDL?.type === 'max' && <p>{errors.HDL.message}</p>}
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" className={styles.buttonTwo}/>
            </form>
            {
                popap &&
                <div className={styles.popap}>
                    <Popap close={() => setPopap(!popap)}/>
                </div>
            }
        </div>
    )
}


export default Register