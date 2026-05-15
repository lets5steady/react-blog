import { useState } from 'react';
import styles from './ThumbsDownButton.module.css';
import nomal from '../../../assets/thumb_down.png';
import colored from '../../../assets/thumb_down_colored.png';


export default function ThumbsDownButton({initialValue}) {
    const [clicked,setClicked] = useState(false);
    const [count,setCount] = useState(initialValue);

    const handleClick = () => {
        setClicked(!clicked);
        {!clicked && setCount(prev => prev + 1)};
        {clicked && setCount(prev => prev - 1)};
    }
    
    return(
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.btn}>
                <img src={clicked ? colored : nomal} alt="thumbsup" />
            </button>
            <span className={styles.number}>{count}</span>
        </div>
    );
}