import styles from './CardHeader.module.css'

export default function CardHeader({ category = 'category', title = 'Blog title', name = 'writer' }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                <span>[{category}]</span>
                <span>{title}</span>
            </h3>
            <p className={styles.name}>{name}</p>
        </div>
    );
}