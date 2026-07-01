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
                <input type="radio" name='age' id={option.id}
                    value={option.value}
                    onChange={handleForm}
                    checked={form.age === option.value}>
                </input>
                {option.text}
            </label>)
    );
}