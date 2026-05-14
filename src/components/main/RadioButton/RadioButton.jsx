import { useState } from 'react';
import styles from './RadioButton.module.css'

export default function RadioButton({ categoryName, options=[]}) {

    const [form,setForm] = useState({});

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return(
            options.map(option => 
                <label key={option.id}>
                    <input type="radio" name={categoryName} id={option.id}
                        value={option.value}
                        onChange={handleForm}>
                    </input>
                    {option.text}
                </label>)
    );
}