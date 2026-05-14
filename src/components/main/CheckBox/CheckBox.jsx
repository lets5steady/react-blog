import { useState } from 'react';
import styles from './CheckBox.module.css';


export default function CheckBox({ categoryName, options=[]}) {
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
                    <input type="check" name={categoryName} id={option.id}
                        value={option.value}
                        onChange={handleForm}>
                    </input>
                    {option.text}
                </label>)

    );
}

