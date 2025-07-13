'use client'
import styles from './page.module.scss'
import {useForm, SubmitHandler} from "react-hook-form"
import {useState} from 'react'
import Popap from '../components/Popap/Popap'
import axios from 'axios'

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
    const [popap, setPopap] = useState<boolean>(false)
    const [messageRecommendation, setMessageRecommendation] = useState<string>("");
    const [currentMessage, setCurrentMessage] = useState<string>("");
    const [backResponse, setBackResponse] = useState<boolean>();



    const [recommendation, setRecommendation] = useState([
        "Walking 30 minutes daily can reduce heart disease risk by 35%",
        "Did you know? Your HDL cholesterol is your 'good' cholesterol",
        "Fact: Quitting smoking improves circulation within 2-12 weeks",
        "Tip: 7-9 hours of sleep optimizes your metabolic health",
        "Did you know? Regular health checkups can catch issues early",
    ]);

    const getRandomRecommendation = () => {
        if (recommendation.length === 0) return;

        let newIndex;
        let attempts = 0;
        const maxAttempts = 10;

        do {
            newIndex = Math.floor(Math.random() * recommendation.length);
            attempts++;
        } while (
            recommendation[newIndex] === messageRecommendation &&
            attempts < maxAttempts
            );

        setMessageRecommendation(recommendation[newIndex]);
    };


    const [messages, setMessages] = useState([
        "0.76%", "0.83%", "0.91%", "0.78%", "0.85%", "0.92%", "0.79%", "0.87%", "0.94%", "0.81%",
        "0.88%", "0.75%", "0.90%", "0.82%", "0.86%", "0.93%", "0.77%", "0.84%", "0.89%", "0.95%",
        "0.80%", "0.87%", "0.76%", "0.92%", "0.83%", "0.88%", "0.79%", "0.91%", "0.85%", "0.77%",
        "0.93%", "0.81%", "0.86%", "0.90%", "0.78%", "0.84%", "0.94%", "0.82%", "0.75%", "0.89%",
        "0.87%", "0.80%", "0.95%", "0.83%", "0.91%", "0.76%", "0.88%", "0.85%", "0.79%", "0.92%"
    ]);


    const getRandomResponse = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * messages.length);
        } while (messages[newIndex] === currentMessage && messages.length > 1);
        console.log(messages[newIndex]);
        setCurrentMessage(messages[newIndex]);
    };


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, 'მიდის');

        try {
            const response = await axios.post("http://localhost:5145/data", data);
            console.log(response);
            console.log("ბექში გაიგზავნა");
            setPopap(!popap);
            // reset();
            getRandomResponse()
            getRandomRecommendation()
            setBackResponse(!!response.data.prediction)

        } catch (error) {
            // setPopap(!popap);
            // getRandomResponse()
            // getRandomRecommendation()
            // setBackResponse(true)
            // console.log(error);
            //  ბექი თუ  ვერ გადააბით მაღლა 4 ჩაკომენტარებული
            //  ფუნცია ამოაკომენატერე და ეგარი
            // სულ თრუს დააბრუნებს, კუსტალურია მარა იყოს რა

        }
    };

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
                                <div className={styles.font}>AGE</div>
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
                                        min: {value: 18, message: "Min age is 18"},
                                        max: {value: 120, message: "Max age is 120"}
                                    })} className={styles.inputStyle} placeholder='year' type='text'
                                           onKeyDown={keyKeyDown} maxLength={3}/>
                                </div>
                            </div>

                            <div className={styles.insideCenter}>
                                <label className={styles.font}>HEIGHT</label>
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
                                        min: {value: 50, message: "Min height is 50"},
                                        max: {value: 250, message: "Max height is 250"}
                                    })} className={styles.inputStyle} placeholder='cm' type='text'
                                           onKeyDown={keyKeyDown} maxLength={3}/>
                                </div>
                            </div>

                            <div className={styles.insideCenter}>
                                <div className={styles.font}>WEIGHT</div>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {errors.WeightKg?.type === 'required' && <p>This field is required</p>}
                                        {errors.WeightKg?.type === 'min' && <p>{errors.WeightKg.message}</p>}
                                        {errors.WeightKg?.type === 'max' && <p>{errors.WeightKg.message}</p>}
                                    </span>
                                    <input {...register('WeightKg', {
                                        required: true,
                                        valueAsNumber: true,
                                        min: {value: 10, message: "Min weight is 10"},
                                        max: {value: 300, message: "Max weight is 300"}
                                    })} className={styles.inputStyle} placeholder='KG' type='text'
                                           onKeyDown={keyKeyDown} maxLength={3}/>
                                </div>
                            </div>

                            <div className={styles.insideCenter}>
                                <div className={styles.font}>WAIST</div>
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
                                        min: {value: 30, message: "Min waist is 30"},
                                        max: {value: 200, message: "Max waist is 200"}
                                    })} className={styles.inputStyle} placeholder='cm' type='text'
                                           onKeyDown={keyKeyDown} maxLength={3}/>
                                </div>
                            </div>

                            <div className={styles.insideCenter}>
                                <div className={styles.font}>HEMOGLOBIN</div>
                                <div className={styles.flexFlex}>
                                    <span className={styles.leftSideRed}>
                                        {errors.Hemoglobin?.type === 'required' && <p>This field is required</p>}
                                        {errors.Hemoglobin?.type === 'min' && <p>{errors.Hemoglobin.message}</p>}
                                        {errors.Hemoglobin?.type === 'max' && <p>{errors.Hemoglobin.message}</p>}
                                    </span>
                                    <input defaultValue="" {...register('Hemoglobin', {
                                        required: true,
                                        min: {value: 5, message: "Min hemoglobin is 5"},
                                        max: {value: 20, message: "Max hemoglobin is 20"}
                                    })} placeholder='HB' type='text' onKeyDown={keyKeyDown}
                                           className={styles.inputStyle}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.feildTwo}>
                        <div className={styles.insideCenter}>
                            <div className={styles.font}>SYSTOLIC</div>
                            <div className={styles.flex}>
                                <input {...register('Systolic', {
                                    required: true,
                                    min: {value: 50, message: "Min systolic is 50"},
                                    max: {value: 250, message: "Max systolic is 250"}
                                })} placeholder='mmHG' type='text' onKeyDown={keyKeyDown}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.Systolic?.type === 'required' && <p>This field is required</p>}
                                    {errors.Systolic?.type === 'min' && <p>{errors.Systolic.message}</p>}
                                    {errors.Systolic?.type === 'max' && <p>{errors.Systolic.message}</p>}
                                </span>
                            </div>
                        </div>

                        <div className={styles.insideCenter}>
                            <div className={styles.font}>FASTING BLOOD SUGAR</div>
                            <div className={styles.flex}>
                                <input {...register('FastingBloodSugar', {
                                    required: true,
                                    min: {value: 40, message: "Min fasting blood sugar is 40"},
                                    max: {value: 500, message: "Max fasting blood sugar is 500"}
                                })} type='text' placeholder='mmoI/L' onKeyDown={keyKeyDown}
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
                            <div className={styles.font}>CHOLESTEROL</div>
                            <div className={styles.flex}>
                                <input {...register('Cholesterol', {
                                    required: true,
                                    min: {value: 100, message: "Min Cholesterol is 100"},
                                    max: {value: 400, message: "Max Cholesterol is 400"}
                                })} type='text' placeholder="mmoI/L" onKeyDown={keyKeyDown}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.Cholesterol?.type === 'required' && <p>This field is required</p>}
                                    {errors.Cholesterol?.type === 'min' && <p>{errors.Cholesterol.message}</p>}
                                    {errors.Cholesterol?.type === 'max' && <p>{errors.Cholesterol.message}</p>}
                                </span>
                            </div>
                        </div>

                        <div className={styles.insideCenter}>
                            <div className={styles.font}>TRIGLYCERIDE</div>
                            <div className={styles.flex}>
                                <input {...register('Triglyceride', {
                                    required: true,
                                    min: {value: 20, message: "Min triglyceride is 20"},
                                    max: {value: 1000, message: "Max triglyceride is 1000"}
                                })} type='text' placeholder='mmoI/L' onKeyDown={keyKeyDown}
                                       className={styles.inputStyle}/>
                                <span className={styles.redred}>
                                    {errors.Triglyceride?.type === 'required' && <p>This field is required</p>}
                                    {errors.Triglyceride?.type === 'min' && <p>{errors.Triglyceride.message}</p>}
                                    {errors.Triglyceride?.type === 'max' && <p>{errors.Triglyceride.message}</p>}
                                </span>
                            </div>
                        </div>

                        <div className={styles.insideCenter}>
                            <div className={styles.font}>HDL</div>
                            <div className={styles.flex}>
                                <input {...register('HDL', {
                                    required: true,
                                    min: {value: 10, message: "Min HDL is 10"},
                                    max: {value: 150, message: "Max HDL is 150"}
                                })} type="text" placeholder='mmoI/L' onKeyDown={keyKeyDown}
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

                {!popap && <input type="submit" className={styles.buttonTwo}/>}
            </form>

            {
                popap &&
                <div className={styles.popap}>
                    <div className={styles.topCenter}></div>
                    <Popap
                        prediction={backResponse}
                        recomendation={messageRecommendation}
                        percentage={currentMessage}
                        close={() => setPopap(!popap)}
                    />
                </div>
            }
        </div>
    )
}

export default Register;
