import styles from './SelectBoxItemList.module.css'

export default function SelectBoxItemList({ children, form, setForm }) {

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    return (
        <>
            <select name='medium' id='medium'
                value={form.medium}
                className={styles.box}
                onChange={handleForm}>
                <option value="">--１つ選択してください--</option>
                {children}
            </select>
        </>
    );
}