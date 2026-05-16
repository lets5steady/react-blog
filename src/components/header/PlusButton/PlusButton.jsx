import styles from './PlusButton.module.css';
import plus from '../../../assets/plus.png';

export default function PlusButton({text  = {} , isOpen , onToggle }) {

    return(
        <>
            <button  className={styles.container}
            onClick={onToggle}>
                <img src={plus} alt="開閉するメニューボタン" className={isOpen ? `${styles.close}` : `${styles.btn}`}/>
                <span>{isOpen ? text.active : text.nomal}</span>
            </button>
        </>
    );
}