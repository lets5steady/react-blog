import styles from './GridLayout.module.css';

export default function FormGrid({children}) {
    return(
        <div className={styles.grid}>
            {children}
        </div>
    );
}