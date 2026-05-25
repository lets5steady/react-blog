import Form from '../Form/Form';
import styles from './FormModal.module.css';

export default function FormModal({ title, desc }) {

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Form />
        </div>
    );
}