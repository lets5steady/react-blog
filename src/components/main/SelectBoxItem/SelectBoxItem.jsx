import styles from './SelectBoxItem.module.css'

export default function SelectBoxItem({ text = '選択項目' }) {
    return (
        <div className={styles.container}>
            <p className={styles.item}>{text}</p>
        </div>
    );
}