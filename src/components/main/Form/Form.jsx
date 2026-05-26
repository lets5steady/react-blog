import SelectBoxItem from '../SelectBoxItem/SelectBoxItem';
import SelectBoxItemList from '../SelectBoxItemList/SelectBoxItemList';
import GridLayout from '../../main/GridLayout/GridLayout';
import styles from './Form.module.css';
import RadioButton from '../RadioButton/RadioButton';
import CheckBox from '../CheckBox/CheckBox';
import TextArea from '../TextArea/TextArea';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';
import { useState } from 'react';

const questions = [
    'Age',
    'How did you hear about BAMOS DESIGN?',
    'What is your favorite field or area of interest?',
    // 'What kind of special features or topics would you like to read on BAMOS DESIGN in the future?',
];

const ages = [
    { text: '0 - 10', value: '0 - 10', id: 1 },
    { text: '10 - 20', value: '10 - 20', id: 2 },
    { text: '20 - 30', value: '20 - 30', id: 3 },
    { text: '30 - 40', value: '30 - 40', id: 4 },
    { text: '40 - 50', value: '40 - 50', id: 5 },
    { text: '50 and above', value: '50 and above', id: 6 },
];

const medium = [
    { text: 'z', value: 'z', id: 1 },
    { text: '友人の紹介', value: 'friend', id: 2 },
    { text: 'SNS', value: 'SNS', id: 3 },
    { text: 'webバナー', value: 'banner', id: 4 },
    { text: '動画配信', value: 'video', id: 5 },
    { text: '広告・ポスター', value: 'poster', id: 6 },
    { text: 'その他', value: 'other', id: 7 },
];

const favoriteField = [
    { text: '音楽', value: 'music', id: 1 },
    { text: '芸術', value: 'art', id: 2 },
    { text: 'デザイン', value: 'design', id: 3 },
    { text: 'プログラミング', value: 'programming', id: 4 },
];

export default function Form() {
    const [form,setForm] = useState({
        Age: null,
        medium: undefined,
        favoriteField: [],
        message: ''
    });

    const submitBtn = () => {
        console.log(`
            年齢：${form.ages}
            どうやってこのサイトを知ったのか：${form.medium}
            興味のあるジャンル：${form.favoriteField}
            ご意見：${form.message}
            `);
    };

    return (
        <form className={styles.formContainer}>
            <div className={styles.input}>
                <p>{questions[0]}</p>
                <GridLayout>
                    <RadioButton options={ages} form={form} setForm={setForm}/>
                </GridLayout>
            </div>

            <div className={styles.input}>
                <p>{questions[1]}</p>
                <SelectBoxItemList form={form} setForm={setForm}>
                    <SelectBoxItem items={medium}/>
                </SelectBoxItemList>
            </div>

            <div className={styles.input}>
                <p>{questions[2]}</p>
                <GridLayout>
                    <CheckBox  options={favoriteField}  form={form} setForm={setForm}/>
                </GridLayout>
            </div>

            <div className={styles.input}>
                {/* <p>{questions[3]}</p> */}
                <TextArea form={form} setForm={setForm}/>
            </div>

            <SimpleButton text='SUBMIT' onClick={submitBtn}/>
        </form>
    );
}