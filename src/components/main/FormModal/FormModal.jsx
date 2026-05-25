import Form from '../Form/Form';
import styles from './FormModal.module.css';
import close from '../../../assets/close.png';

export default function FormModal({ title, desc ,onClick}) {

    return (
        <div className={styles.container}>
            <button onClick={onClick}
            type='button'
            aria-label='閉じる'
            className={styles.close}>
                <img src={close} alt="" /></button>
            <h2>{title}</h2>
            {/* <p>{desc}</p> */}
            <Form />
        </div>
    );
}