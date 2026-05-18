import styles from './PlusButton.module.css';

export default function PlusButton({text  = {} , isOpen , onToggle }) {

    return(
        <>
            <button  className={styles.container}
            onClick={onToggle}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}>
                <svg className={isOpen ? `${styles.close}` : `${styles.btn}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8" width="20" height="4" fill='currentColor'/>
                <rect x="8" y="20" width="20" height="4" transform="rotate(-90 8 20)" fill='currentColor'/>
                </svg>

                <span className={isOpen ? styles.active : undefined}>{isOpen ? text.active : text.nomal}</span>
            </button>
        </>
    );
}