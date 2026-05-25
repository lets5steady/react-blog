import styles from './ModalOverlay.module.css';

export default function ModalOverlay({ children, state ,onClick}) {
    return (
        <div className={state ? styles.open : styles.modal}
        // onClick={onClick}
        >
            {children}
        </div>
    );
}