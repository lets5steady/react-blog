import styles from './PlusButton.module.css';
import plus from '../../../assets/plus.png';
import { useState } from 'react';

export default function PlusButton({text}) {
    const [clicked,setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <>
            <button  className={styles.container}
            onClick={handleClick}>
                <img src={plus} alt="開閉するメニューボタン" className={clicked ? `${styles.close}` : `${styles.btn}`}/>
                <span>{clicked ? text.active : text.nomal}</span>
            </button>
        </>
    );
}