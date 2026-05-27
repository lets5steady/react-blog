import styles from './FirstView.module.css'
import logo from '../../../assets/bamosDesignLogo_white.svg'

export default function FirstView() {
    return(
    <div className={styles.container}>
        <div className={styles.item}> <img src={logo} alt='ロゴ'/></div>
    </div>
    );
}