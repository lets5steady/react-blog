import styles from './SimpleButton.module.css'

export default function SimpleButton({text}) {
    return(
        <button className={styles.btn}>
            {text}
        </button>
    );
}