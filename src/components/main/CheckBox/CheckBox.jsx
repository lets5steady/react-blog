import { useRef, useState } from 'react';
import styles from './CheckBox.module.css';

export default function CheckBox({ options = [], form, setForm }) {

    const handleCheck = e => {
        const checkedItem = [...form.favoriteField];

        if (e.target.checked) {
            checkedItem.push(e.target.value);
        } else {
            checkedItem.splice(checkedItem.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: checkedItem
        });
    }


    return (
        <>
            {options.map(option =>
                <label key={option.id}>
                    <input type="checkbox" name='favoriteField' id={option.id}
                        value={option.value}
                        onChange={handleCheck}>
                    </input>
                    {option.text}
                </label>)}
        </>
    );
}

