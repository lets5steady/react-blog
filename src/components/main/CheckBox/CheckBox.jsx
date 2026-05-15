import { useState } from 'react';
import styles from './CheckBox.module.css';


export default function CheckBox({ categoryName, options=[]}) {
    const [form,setForm] = useState({});

    const handleForm = e => {
        const checkedItem = [];
        
        if (e.target.checked) {
            checkedItem.push(e.target.value);
        }else{
            checkedItem.splice(checkedItem.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: checkedItem
        });
        console.log(checkedItem);
        
    }

    return(
            <>
            {options.map(option => 
                <label key={option.id}>
                    <input type="checkbox" name={categoryName} id={option.id}
                        value={option.value}
                        onChange={handleForm}>
                    </input>
                    {option.text}
                </label>)}
            </>
    );
}

