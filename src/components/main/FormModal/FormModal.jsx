import Form from '../Form/Form';
import styles from './FormModal.module.css';
import close from '../../../assets/close.png';

export default function FormModal({ title, onClick ,setIsOpen }) {

    return (
        <div className={styles.container}
            onClick={(e) => e.stopPropagation()}>
            <button onClick={onClick}
                type='button'
                aria-label='閉じる'
                className={styles.close}>
                <img src={close} alt="" /></button>
            <h2>{title}</h2>
            <Form setIsOpen={setIsOpen}/>
        </div>
    );
}