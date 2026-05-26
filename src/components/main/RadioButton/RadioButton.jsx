import styles from './RadioButton.module.css'

export default function RadioButton({ options = [], form, setForm }) {

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        options.map(option =>
            <label key={option.id}>
                <input type="radio" name='ages' id={option.id}
                    value={option.value}
                    onChange={handleForm}
                    checked={form.ages === option.value}>
                </input>
                {option.text}
            </label>)
    );
}