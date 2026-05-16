import { useState } from 'react';
import styles from './ThumbsUpButton.module.css';
import nomal from '../../../assets/thumb_up.png';
import colored from '../../../assets/thumb_up_colored.png';


export default function ThumbsUpButton({initialValue}) {
    const [clicked,setClicked] = useState(false);
    const [count,setCount] = useState(initialValue);

    const handleClick = () => {
        const nextClicked = !clicked;
        setClicked(nextClicked);

        setCount(prev => nextClicked ? prev + 1 : prev - 1)
        // setCount(prev => prev + (nextClicked ? 1 : -1))
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