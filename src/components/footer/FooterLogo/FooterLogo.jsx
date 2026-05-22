import Logo from '../../commons/Logo/Logo';
import styles from './FooterLogo.module.css';

export default function FooterLogo() {
    return (
        <div className={styles.container}>
            <Logo color='accent' alt='BAMOS DESIGN' />
        </div>
    );
}