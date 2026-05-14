import { useState } from 'react';
import styles from './TextArea.module.css'
import Logo from '../../commons/Logo';

export default function TextArea({placeholder = 'ここに記入してください。'}) {
    const [form,setForm] = useState({
        message: ''
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(form);  
    };

    return(
            <textarea 
            name="message" id="message" 
            rows="6" cols="22"
            placeholder={placeholder}
            className={styles.textArea}
            value={form.message}
            onChange={handleForm}></textarea>
    );
}