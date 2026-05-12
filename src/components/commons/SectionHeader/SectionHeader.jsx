import styles from './SectionHeader.module.css'

export default function SectionHeader({title}) {
    return(
        <h2 className={styles.sectionTitle}>{title}</h2>
    );
}