import styles from './SimpleButton.module.css'

export default function SimpleButton({ text, onClick }) {
    return (
        <button className={styles.btn}
            onClick={onClick}
            type='button'>
            {text}
        </button>
    );
}