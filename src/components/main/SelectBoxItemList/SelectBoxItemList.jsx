import { useState } from 'react';
import styles from './SelectBoxItemList.module.css'

export default function SelectBoxItemList({children}) {

    const [form,setForm] = useState({})

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    // const show = () => {
    //     console.log(`知ったきっかけ${form.medium}`)
    // }一つのボタンで複数の値をまとめて送信できるようにする

    return(
        <>
        <select name="medium" id="medium" 
            className={styles.box}
            onChange={handleForm}>
            <option value="">--１つ選択してください--</option>
            {children}
        </select>
        </>
    );
}