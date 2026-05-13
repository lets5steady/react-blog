import styles from './CardHeader.module.css'

export default function CardHeader({ title = 'Blog title', name = 'writer' }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.name}>{name}</p>
        </div>
    );
}