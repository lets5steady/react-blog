import styles from './TextArea.module.css'

export default function TextArea({ placeholder = 'ここに記入してください。', form, setForm }) {

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <textarea
            name="message" id="message"
            rows="2" cols="22"
            placeholder={placeholder}
            className={styles.textArea}
            value={form.message}
            onChange={handleForm}>
        </textarea>
    );
}